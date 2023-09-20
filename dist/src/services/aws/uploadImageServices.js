"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const multer = require("multer");
const multerS3 = require("multer-s3");
const client_s3_1 = require("@aws-sdk/client-s3");
require('dotenv').config();
const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccesKey = process.env.AWS_SECRET_ACCESS_KEY;
const regionAws = process.env.AWS_REGION;
const s3Config = new client_s3_1.S3Client({
    region: regionAws,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccesKey
    }
});
/**
 * filter file only in a image with function match.
 *
 */
const imageFilter = (_req, file, cb) => {
    if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
/**
 * function to upload your image in aws.
 */
exports.uploadImage = multer({
    fileFilter: imageFilter,
    storage: multerS3({
        s3: s3Config,
        bucket: `${bucketName}`,
        metadata: (_req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (_req, _file, cb) => {
            cb(null, `${Date.now().toString()}.jpg`);
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 10 // 2mb file size
    }
}).single('image');
module.exports = { uploadImage: exports.uploadImage };
