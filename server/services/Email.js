import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT) || 587;
  const user = process.env.EMAIL_USERNAME || "ryan@zonewebsites.com";
  const pass = process.env.EMAIL_PASSWORD || "eokltjvpmjcvktlj";

  const isGmail = !process.env.EMAIL_HOST || host.includes("gmail") || host.includes("google");

  const transportConfig = isGmail
    ? {
        service: "gmail",
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      }
    : {
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      };

  const transporter = nodemailer.createTransport(transportConfig);

  const defaultFrom = user ? `SellIt <${user}>` : "noreply@sellpersonalitems.com";

  const mailOptions = {
    from: options.from || process.env.EMAIL_FROM || defaultFrom,
    to: options.email,
    subject: options.subject,
    text: options.message || null,
    html: options?.html || null,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`Email sent successfully to ${options.email} (Message ID: ${info?.messageId})`);
  return info;
};

export default sendEmail;

export const sendMultipleEmails = async (...args) => {
  try {
    const emailList = args.flat(Infinity).filter(Boolean);
    console.log(`Processing sendMultipleEmails for ${emailList.length} recipient(s)...`);

    const promises = emailList.map((arg) => sendEmail({ ...arg }));
    const results = await Promise.all(promises);

    console.log(`All ${results.length} email(s) sent successfully.`);
    return results;
  } catch (error) {
    console.error("Error in sendMultipleEmails:", error);
    throw error;
  }
};
