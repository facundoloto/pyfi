import express  from "express"; //ES module
import { Request, Response } from "express";
import { uploadImage } from '../services/aws/uploadImageServices';
// import { checkPostRequestBody } from "./../middleware/checks";

const router = express.Router();

 router.post('/', uploadImage,async ( req:Request, res:Response) => {
   try {
    let fileImage:any = req.file;
    res.status(200).send(fileImage.location);
   }catch (err) {
     res.status(404).send(err);
   };

  });

module.exports =  router ;
