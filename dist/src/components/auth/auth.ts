import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HttpStatusCode } from './../../constant/httpCodes';
import { JWTData } from './../../interfaces/interfaces';
require('dotenv').config();

const secretKey = process.env.SECRET_KEY_JWT as string;

export default class Auth {

    generateToken = (user: JWTData['user']): string => {
        const payload: JWTData = { user };
        return jwt.sign(payload, secretKey, { expiresIn: '31d' });
    };

    verifyToken = (token: string): JWTData | null => {
        try {
            const decoded = jwt.verify(token, secretKey) as JWTData;
            return decoded;
        } catch (error) {
            return null;
        }
    }

    decodedToken = (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization as string;
        /*this verify if there is a token in a request */
        if (!token) {
            console.log('token not avilable')
            res.status(HttpStatusCode.NotImplemented).json({ message: 'token not provided' });
        } else {
            const decoded = this.verifyToken(token);
            if (!decoded) {
                console.log('decode fail')
                res.status(HttpStatusCode.NotImplemented).json({ message: 'Invalid token' });
            } else {
                console.log('token successful')
                next();
            }
        }
        /*when it found token we verify if it's the right token or not*/

    }

}