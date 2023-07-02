import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const contact = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.phone || !data.message) {
      return res
        .status(400)
        .send({ message: "Please provide all information" });
    }

    try {
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

      var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Contact Us",
        html: `<h1>Name: ${data.name}</h1> <h2>Email: ${data.email}</h2> <h3>Phone: ${data.phone}</h3> <h4>Message: ${data.message}</h4>`,
      };

      let result = await transporter.sendMail(mailOptions);
      return res.status(200).send({ message: "success", data: result });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};
export default contact;
