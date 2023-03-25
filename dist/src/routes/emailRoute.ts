import express  from "express"; //ES module
import { Request, Response } from "express";
import { emailCompany } from "../services/email/emailConfigServices";
import { sendEmailWelcome, emailOption} from "../services/email/sendEmailServices";
// import { checkPostRequestBody } from "./../middleware/checks";

const router = express.Router();

 router.post('/', async ( req:Request, _res:Response) => {
   
    const emailUser: string = req.body.email as string;
    /*
    *content Email is a function for set the options and template to
    *send a user
    */
    const contentEmail = emailOption(
      {
        from: emailCompany.email,
        to: emailUser,
        subject: 'Welcome',
        text: 'hi there, welcome to our app!!',
        template: 'welcome',
      });

    await sendEmailWelcome(contentEmail);

  });

module.exports =  router ;