import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const SendEmailUtility = async (freeTrialFiles) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })
  );
  let att = [];
  if (freeTrialFiles?.length > 0) {
    freeTrialFiles.map((item) => {
      att.push({
        path: item,
      });
    });
  }
  console.log(att, "att");
  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Free Trial",
    // html: `<h1>Name: ${data.name}</h1> <h2>Email: ${data.email}</h2> <h3>Phone: ${data.phone}</h3> <h4>Message: ${data.message}</h4>`,
    attachments: att,
  };

  return await transporter.sendMail(mailOptions);
};

export default SendEmailUtility;
