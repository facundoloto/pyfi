import nodemailer from 'nodemailer';
import path from 'path';
require('dotenv').config();


export const emailCompany: { email: string, password: string } = { email: process.env.EMAIL as string, password: process.env.EMAIL_PASS as string } ;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: { user: emailCompany.email, pass: emailCompany.password },
});

export const hbsConfig = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: path.join(__dirname, '../email/views/'),
      layoutsDir: path.join(__dirname, '../email/views/'),
      defaultLayout: ''
    },
    viewPath: path.join(__dirname, '../email/views/'),
    extName: '.hbs'
  };
  
