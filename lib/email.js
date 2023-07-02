import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  })
);

export const sendEmail = async (subject, text, attachments) => {
  console.log(subject, "subject");
  const mailOptions = {
    from: "graphicsviewpoint24@gmail.com",
    to: "graphicsviewpoint24@gmail.com",
    subject,
    text,
    attachments,
  };

  const mailResult = await transporter.sendMail(mailOptions);
};
