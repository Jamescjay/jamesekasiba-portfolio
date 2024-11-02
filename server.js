const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jamesekasiba123@gmail.com",
    pass: "imrc jake qqve duvw", // Use your app password here
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: email,
    to: "jamesekasiba123@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      return res
        .status(500)
        .json({ code: 500, message: "Error sending email." });
    } else {
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(5000, () => console.log("Server Running"));
