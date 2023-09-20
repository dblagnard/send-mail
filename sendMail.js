const nodemailer = require("nodemailer");

// Configuration du transporteur SMTP pour un serveur local (ex. localhost:25)
const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 25,
  secure: false, // Pas de chiffrement
  ignoreTLS: true, // Ignorer le support TLS
});

// Options de l'email
const mailOptions = {
  from: "hello@email.com",
  to: "jblagnard@gmail.com",
  subject: "Test d'envoi d'email en local",
  text: "Ceci est un test d'envoi d'email en local.",
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur lors de l'envoi de l'email:", error);
  } else {
    console.log("Email envoyé:", info.response);
  }
});





