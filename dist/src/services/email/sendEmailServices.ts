import { transporter, hbsConfig } from './emailConfigServices';
import path from 'path';
import hbs  from 'nodemailer-express-handlebars';

export function emailOption({ from, to, subject, text, template }: 
{ from: string, to: string, subject: string, text: string, template:string}): Object {

  let options: Object = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    template: template,
    attachments:{ 
       filename: 'logo',
       path:path.join(__dirname, '../email/views/images/logo.jpeg'),
       cid:'logo',
      }
  };

  return options;
}


export async function sendEmailWelcome(contentEmail:Object){
  transporter.use('compile', hbs(hbsConfig));
  try {
  await transporter.sendMail(contentEmail, function (error, _info) {
    if (error) {
      return 404;
    }
    transporter.close();
    return 200;
  });
  }
  catch (err) {
    console.log(err)
  }
}

