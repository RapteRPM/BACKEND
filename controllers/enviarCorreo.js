// controllers/enviarCorreo.js
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const smtpHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.EMAIL_PORT || 465);
const smtpSecure = String(process.env.EMAIL_SECURE || 'true').toLowerCase() === 'true';

const enviarCorreo = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    auth: {
      user: process.env.EMAIL_USER || "rpmservice2026@gmail.com",
      pass: process.env.EMAIL_PASS
    },
    tls: { rejectUnauthorized: false }
  });

  try {
    await transporter.sendMail({
      from: `"RPMMarket" <${process.env.EMAIL_USER || 'rpmservice2026@gmail.com'}>`,
      to,
      subject,
      html
    });
    console.log(`📨 Correo enviado correctamente a ${to}`);
  } catch (err) {
    console.warn("⚠️ No se pudo enviar el correo:", err.message);
    throw err;
  }
};

export default enviarCorreo;
