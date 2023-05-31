import { emailCompany } from "./emailConfigServices";
import { sendEmailWelcome, emailOption} from "./sendEmailServices";

export class Email {
    
    public static async welcome(email:string, name:string) {
        const emailUser: string = email;
        const nameUser:string = name;
        
        /*
        *content Email is a function for set the options and template to
        *send a user
        */
        const contentEmail = emailOption(
          {
            from: emailCompany.email,
            to: emailUser,
            subject: 'Welcome '+nameUser,
            text: 'hi there, welcome to our app!!',
            template: 'welcome',
          });
    
        await sendEmailWelcome(contentEmail);
      }
}