import nodemailer from 'nodemailer';

//CREATE CONNECTION FOR LIVE
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});


//VERIFY CONNECTION
export async function verifyConnection() {
    return transporter.verify();
}