// controllers/enviarCorreo.js
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const enviarCorreo = async ({ to, subject, html }) => {
  const fromEmail = process.env.EMAIL_FROM || 'noreply@rpmmarket.com';
  
  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to,
      subject,
      html
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    console.log(`📨 Correo enviado correctamente a ${to} (ID: ${result.data.id})`);
    return result.data;
  } catch (err) {
    console.warn("⚠️ No se pudo enviar el correo:", err.message);
    throw err;
  }
};

export default enviarCorreo;
