import multer = require("multer");
import multerS3 = require('multer-s3');
import { S3Client } from '@aws-sdk/client-s3';
require('dotenv').config();

const accessKeyId: string = process.env.AWS_ACCESS_KEY_ID as string;
const secretAccesKey: string = process.env.AWS_SECRET_ACCESS_KEY as string;

const s3Config = new S3Client({
  region: 'sa-east-1',
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccesKey
  }
});

/**
 * filter file only in a image with function match.
 *
 */
const imageFilter = (_req: any, file: any, cb: any) => {

  if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }

  cb(null, true);
};

/**
 * function to upload your image in aws.
 */
export const uploadImage = multer({
  fileFilter: imageFilter,
  storage: multerS3({

    s3: s3Config,
    bucket: 'pyfi',

    metadata: (_req: any, file: any, cb: any) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (_req: any, _file: any, cb: any) => {
      cb(null, `${Date.now().toString()}.jpg`)
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 10 // 2mb file size
  }
}).single('image');

module.exports = { uploadImage };