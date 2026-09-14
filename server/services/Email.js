// Email service v3 - explicit port 587 STARTTLS (Vercel blocks port 465 used by service:"gmail")
import nodemailer from "nodemailer";

const createTransporter = () => {
  const user = process.env.EMAIL_USERNAME || "ryan@zonewebsites.com";
  const pass = process.env.EMAIL_PASSWORD || "eokltjvpmjcvktlj";
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT) || 587;

  // Always use explicit host/port with STARTTLS (port 587).
  // Do NOT use service:"gmail" — it defaults to port 465 which is blocked on Vercel.
  return nodemailer.createTransport({
    host,
    port,
    secure: false, // false = STARTTLS on port 587 (true = SSL on port 465 — blocked by Vercel)
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 6000,  // 6s connect timeout
    greetingTimeout: 6000,
    socketTimeout: 6000,
  });
};

const sendEmail = async (options) => {
  const user = process.env.EMAIL_USERNAME || "ryan@zonewebsites.com";
  const transporter = createTransporter();

  const defaultFrom = `SellIt <${user}>`;

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
    console.error("Error in sendMultipleEmails:", error?.message || error);
    throw error;
  }
};
