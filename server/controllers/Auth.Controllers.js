import crypto from "crypto";
import jwt from "jsonwebtoken";
import sendMail from "../services/Email.js";
import fs from "fs";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { CatchAsync } from "../utils/CatchAsync.js";
import AppError from "../utils/appError.js";
import path from "path";
import { getTemplatePath } from "../utils/getTemplatePath.js";

// const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET;

const prisma = new PrismaClient();

export const signToken = (user) => {
  return jwt.sign({ ...user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 24 * 3600000,
    secure: isProduction,
  };
};

const getClearCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
};

const getOtpCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 300000,
    secure: isProduction,
  };
};

const getClearOtpCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
};

const getTokenFromRequest = (req) => {
  const cookieToken = req.cookies?.token;
  if (cookieToken) {
    return cookieToken;
  }

  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return null;
};

export const createSendToken = (user, statusCode, res) => {
  const token = signToken(user);
  res.cookie("token", token, getCookieOptions());
  return res.status(statusCode).json({
    status: "success",
    token,
    data: {
      ...user,
    },
  });
};

// export const checkSession = CatchAsync(async (req, res, next) => {
//   if (!req.cookies.token) return res.status(200).json({ status: false });
//   res.status(200).json({ status: "success" });
// });

export const userSignUp = CatchAsync(async (req, res, next) => {
  try {
    const verificationToken = crypto.randomBytes(24).toString("hex");
    const {
      username,
      name,
      email,
      password,
      countryCode,
      contactNumber,
      userType,
      seller,
      buyer,
      donor,
    } = req.body;

    if (!email) {
      return next(new AppError("Please enter an email address", 400));
    }

    if (!password) {
      return next(new AppError("Please enter a password", 400));
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = (username || email.split("@")[0] || "").trim().toLowerCase();

    // Check if another user already has this username
    if (normalizedUsername) {
      const existingUserByUsername = await prisma.users.findFirst({
        where: {
          username: normalizedUsername,
        },
      });

      if (
        existingUserByUsername &&
        existingUserByUsername.email.toLowerCase() !== normalizedEmail
      ) {
        return res.status(409).json({
          message: "Username is already taken. Please choose a different username.",
        });
      }
    }

    // Check if an existing account with this email exists
    const existingUserByEmail = await prisma.users.findFirst({
      where: {
        email: normalizedEmail,
      },
    });

    const isDonor = donor === true || userType === "DONOR" || userType === "Donor";
    const isSeller = seller === true || userType === "SELLER" || userType === "Seller";
    const resolvedUserType = isDonor ? "Donor" : "Recipient";
    const hashedPassword = await bcrypt.hash(password, 12);

    let user;

    if (existingUserByEmail) {
      // If the existing account is already verified or subscribed, prompt login
      if (existingUserByEmail.verified) {
        return res.status(409).json({
          message: "An account with this email already exists. Please log in.",
        });
      }

      // If the account was unverified (e.g. earlier registration attempt failed or was interrupted),
      // update the unverified record with fresh details and verification token
      user = await prisma.users.update({
        where: { id: existingUserByEmail.id },
        data: {
          username: normalizedUsername,
          name: name || existingUserByEmail.name,
          password: hashedPassword,
          countryCode: countryCode || existingUserByEmail.countryCode || "+1",
          contactNumber: contactNumber || existingUserByEmail.contactNumber || "",
          userType: resolvedUserType,
          verification: verificationToken,
          seller: isSeller,
          buyer: buyer ?? true,
          donor: isDonor,
          updatedAt: new Date(),
        },
      });
    } else {
      const newUser = {
        username: normalizedUsername,
        name: name || normalizedUsername,
        email: normalizedEmail,
        password: hashedPassword,
        countryCode: countryCode || "+1",
        contactNumber: contactNumber || "",
        userType: resolvedUserType,
        verification: verificationToken,
        seller: isSeller,
        buyer: buyer ?? true,
        donor: isDonor,
      };

      user = await prisma.users.create({ data: newUser });
    }

    // Safely attempt to send verification email without blocking account creation
    try {
      const emailTemplatePath = getTemplatePath("emailTemp.html", import.meta.url);
      let x = fs.readFileSync(emailTemplatePath, "utf8");

      const baseUrl = `${req.protocol}://${req.get("host")}`;

      let y = x
        .replace("{{name}}", user.username)
        .replace(
          "{{link}}",
          `${baseUrl}/api/v1/u-verify?token=${verificationToken}&id=${user.id}`
        )
        .replace("{{email}}", normalizedEmail)
        .replace("{{password}}", password);

      await sendMail({
        email: normalizedEmail,
        subject: "Email Verification: Thank you for registering with us",
        message: "",
        html: y,
      });
    } catch (mailErr) {
      console.error("Warning: Failed to send registration verification email:", mailErr);
    }

    createSendToken(
      {
        id: user.id,
        userId: user.id,
        username: user.username,
        email: user.email,
        isSubscribed: user.isSubscribed || false,
        role: user.role,
      },
      201,
      res
    );
  } catch (error) {
    console.error("Signup error:", error);
    return next(new AppError("Something went wrong. Try again later!", 500));
  }
});

export const userLogin = CatchAsync(async (req, res, next) => {
  const { usernameoremail, password, accountType } = req.body;

  const checkAccountPermission =
    accountType === "DONOR"
      ? { donor: true, buyer: true }
      : accountType === "SELLER"
      ? { seller: true, buyer: true }
      : { buyer: true };

  if (!usernameoremail || !password) {
    return next(
      new AppError("Please provide username/email and password", 400)
    );
  }

  const normalizedIdentifier = usernameoremail.trim().toLowerCase();

  const user = await prisma.users.findFirst({
    select: {
      id: true,
      username: true,
      email: true,
      contactNumber: true,
      password: true,
      role: true,
      userType: true,
      active: true,
      isSubscribed: true,
      seller: true,
      donor: true,
      buyer: true,
    },
    where: {
      OR: [
        { email: { equals: normalizedIdentifier, mode: "insensitive" } },
        { username: { equals: normalizedIdentifier, mode: "insensitive" } },
        { email: usernameoremail },
        { username: usernameoremail },
      ],
      ...checkAccountPermission,
    },
  });

  console.log(user, checkAccountPermission);
  // If user not found, return error
  if (!user) {
    res.clearCookie("token", getClearCookieOptions());
    console.log("User not found");
    return res.status(403).json({ message: "Invalid credentials" });
  }
  if (user.role === "ADMIN") {
    res.clearCookie("token", getClearCookieOptions());
    console.log("User not found 2");
    return res.status(403).json({ message: "Invalid credentials" });
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.clearCookie("token", getClearCookieOptions());
    console.log("Password does not match");
    return res.status(403).json({ message: "Invalid credentials" });
  }

  createSendToken({ ...user, password: undefined }, 200, res);
});

export const verifyUser = CatchAsync(async (req, res, next) => {
  const { token, id } = req.query;
  const user = await prisma.users.update({
    data: {
      verified: true,
    },
    where: {
      id: parseInt(id),
      verification: token,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  // Redirect to frontend login page with a success message
  const frontendUrl = process.env.NODE_ENV === "production" 
    ? "https://sell.sellpersonalitems.com" 
    : "http://localhost:5173";
    
  return res.redirect(`${frontendUrl}?tab=login&verified=true`);
});

export const authMiddleware = async (req, res, next) => {
  const token = getTokenFromRequest(req);
  if (!token) {
    return res.status(403).json({ status: false, message: "Session Expired, Please login again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      ...decoded,
      id: decoded.id || decoded.userId,
    };
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({
        status: "expired",
        message: "Session is expired. Login again",
      });
    } else {
      res
        .status(401)
        .json({ status: "invalid", message: "Token is not valid" });
    }
  }
};

export const restrictToAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ status: false, message: "Only admins are allowed to perform this action" });
  }
  next();
};

export const getValidUser = async (req, res, next) => {
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      return res.status(404).json({
        status: false,
        user: null,
      });
    }

    const isVerified = jwt.verify(token, process.env.JWT_SECRET);

    if (!isVerified) {
      return res.status(401).json({
        status: false,
        message: "unauthorised",
        user: null,
      });
    }

    console.log(isVerified, "jdgfjhg");
    let user = await prisma.users.findUnique({
      where: { id: isVerified.id },
    });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "unauthorised",
        user: null,
      });
    }
    user.password = undefined;
    user.verification = undefined;
    return res.status(200).json({
      status: true,
      user: user,
    });
  } catch (error) {
    if (error) {
      if (
        error.message === "invalid token" ||
        error.name === "JsonWebTokenError"
      ) {
        return res.status(401).json({
          status: 401,
          message: "Unauthorized Access. Please log in again",
        });
      }
      if (
        error.message === "jwt expired" ||
        error.name === "TokenExpiredError"
      ) {
        return res.status(401).json({
          status: 401,
          message: "Session Expired. Please log in again",
        });
      }
    }

    return res.status(500).json({
      message: "Internal Server Error",
      text: "Something went wrong. Try again",
    });
  }
};

export const userLogout = CatchAsync(async (req, res, next) => {
  res.clearCookie("token", getClearCookieOptions());
  res.status(200).json({
    status: 200,
    message: "Logged out successfully",
  });
});

export const AdminLogin = CatchAsync(async (req, res, next) => {
  const { usernameoremail, password, role } = req.body;

  if (!usernameoremail || !password) {
    return next(
      new AppError("Please provide username/email and password", 400)
    );
  }

  const user = await prisma.users.findFirst({
    select: {
      id: true,
      username: true,
      email: true,
      contactNumber: true,
      password: true,
      role: true,
      userType: true,
      active: true,
      seller: true,
      donor: true,
      buyer: true,
    },
    where: {
      OR: [{ email: usernameoremail }, { username: usernameoremail }],
      role,
    },
  });

  console.log(user, role);
  // If user not found, return error
  if (!user) {
    res.clearCookie("token", getClearCookieOptions());
    return res.status(403).json({ message: "Invalid credentials" });
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.clearCookie("token", getClearCookieOptions());
    return res.status(403).json({ message: "Invalid credentials" });
  }

  createSendToken({ ...user, password: undefined }, 200, res);
});

export const sendOtp = CatchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError("Please provide email", 400));
  }

  const user = await prisma.users.findFirst({
    select: {
      id: true,
      username: true,
      email: true,
    },
    where: {
      email,
    },
  });

  console.log(user);
  // If user not found, return error
  if (!user) {
    res.clearCookie("token", getClearCookieOptions());
    return res.status(403).json({ message: "Invalid email address" });
  }

  let otp = generateOtp();
  console.log(otp);

  const ot_expiry = signToken({ ...user, otp });
  res.cookie("ot_expiry", ot_expiry, getOtpCookieOptions());

  await sendEmail({
    email: email,
    subject: "Forget Password: OTP",
    message: `
  Hi ${user.username},

  You recently requested to forget password otp. Your forget password otp is  ${otp}.
  This password otp is only valid for the next 5 minutes.

  If you did not request a password reset, please ignore this email or reply to let us know.

  Thanks, the [sell personal team] team`,
  });

  res.status(200).json({ status: true, message: "OTP sent successfully" });
});

export const verifyOtp = CatchAsync(async (req, res, next) => {
  const { otp } = req.body;
  const { ot_expiry } = req.cookies;
  if (!ot_expiry) {
    return res.status(404).json({ message: "OTP expired" });
  }

  const decoded_otp = jwt.verify(ot_expiry, process.env.JWT_SECRET);
  console.log(otp, decoded_otp);

  if (otp !== decoded_otp.otp) {
    return res.status(400).json({
      status: false,
      message: "Invalid OTP",
    });
  }

  return res
    .status(200)
    .json({ status: true, message: "OTP verified successfully" });
});

export const changePassword = CatchAsync(async (req, res, next) => {
  const { newPassword, confirmPassword, email } = req.body;
  // const { ot_expiry } = req.cookies;

  if (!newPassword || !confirmPassword) {
    return res
      .status(400)
      .json({ status: false, message: "All fields are required" });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      status: false,
      message: "new password and confirm password are not matched",
    });
  }

  // const user = await prisma.users.findFirst({
  //   where: {
  //     email: email,
  //   },
  // });
  const hashedPassword = await bcrypt.hash(newPassword, 12);
  const updatedUser = await prisma.users.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
    },
  });

  if (!updatedUser) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong, Please try after sometime",
    });
  }

  res.clearCookie("ot_expiry", getClearOtpCookieOptions());
  return res
    .status(200)
    .json({ status: true, message: "Password changed successfully" });
});

// // just for testing
// export const RefreshToken = CatchAsync(async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;
//   if (!refreshToken)
//     return res.status(401).json({ error: "Refresh token not provided" });

//   try {
//     const payload = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
//     const user = await prisma.users.findUnique({
//       where: { id: payload.userId },
//     });
//     const storedToken = await prisma.refreshToken.findUnique({
//       where: { token: refreshToken },
//     });

//     if (!user || !storedToken) throw new Error("Invalid token");

//     const newAccessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRES_IN,
//     });
//     const newRefreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, {
//       expiresIn: process.env.JWT_REFRESHTOKEN_EXPIRES_IN,
//     });

//     await prisma.refreshToken.delete({ where: { token: refreshToken } });
//     await prisma.refreshToken.create({
//       data: { token: newRefreshToken, userId: user.id },
//     });

//     res.cookie("refreshToken", newRefreshToken, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "Strict",
//     });
//     res.json({ accessToken: newAccessToken });
//   } catch (error) {
//     return res.status(401).json({ error: "Invalid refresh token" });
//   }
// });

// export const Login = CatchAsync(async (req, res,next) => {
//   const { usernameoremail, password, accountType } = req.body;

//   const checkAccountPermission =
//     accountType === "DONOR"
//       ? { donor: true, buyer: true }
//       : accountType === "SELLER"
//       ? { seller: true, buyer: true }
//       : { buyer: true };

//   if (!usernameoremail || !password) {
//     return next(
//       new AppError("Please provide username/email and password", 400)
//     );
//   }
//   const user = await prisma.users.findFirst({
//     select: {
//       id: true,
//       username: true,
//       email: true,
//       contactNumber: true,
//       password: true,
//       role: true,
//       userType: true,
//       active: true,
//       ...checkAccountPermission,
//     },
//     where: {
//       OR: [{ email: usernameoremail }, { username: usernameoremail }],
//       ...checkAccountPermission,
//     },
//   });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).json({ error: "Invalid email or password" });
//   }

//   const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
//   const refreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, {
//     expiresIn: process.env.JWT_REFRESHTOKEN_EXPIRES_IN,
//   });

//   await prisma.refreshToken.create({
//     data: { token: refreshToken, userId: user.id },
//   });

//   return res.status(200).json({
//     status: "success",
//     token:accessToken,
//     data: {
//       ...user,
//       password:undefined
//     },
//   });
// });

// export const authenticate = CatchAsync((req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res
//       .status(401)
//       .json({ status: false, error: "Authorization header not provided" });

//   const token = authHeader.split(" ")[1];
//   try {
//     const payload = jwt.verify(token, JWT_SECRET);
//     req.userId = payload.userId;
//     next();
//   } catch (error) {
//     return res.status(401).json({ status: false, error: "Invalid token" });
//   }
// });

// app.post('/refresh-token', async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;
//   if (!refreshToken) return res.status(401).json({ error: 'Refresh token not provided' });

//   try {
//     const payload = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
//     const user = await prisma.user.findUnique({ where: { id: payload.userId } });
//     const storedToken = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });

//     if (!user || !storedToken) throw new Error('Invalid token');

//     const newAccessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '15m' });
//     const newRefreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

//     await prisma.refreshToken.delete({ where: { token: refreshToken } });
//     await prisma.refreshToken.create({
//       data: { token: newRefreshToken, userId: user.id },
//     });

//     res.cookie('refreshToken', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
//     res.json({ accessToken: newAccessToken });
//   } catch (error) {
//     return res.status(401).json({ error: 'Invalid refresh token' });
//   }
// });

const generateOtp = () => {
  const otp = crypto.randomInt(100000, 1000000);
  return otp.toString();
};
