import jwt from 'jsonwebtoken';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
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

    decodedToken = (token: string) => {

        let responseBad: responseHttp = { status: false, code: HttpStatusCode.NotImplemented, message: 'Unauthorized' }
        /*this verify if there is a token in a request */
        if (!token) {
            return responseBad
        }
        /*when it found token we verify if it's the right token or not*/
        const decoded = this.verifyToken(token);
        if (!decoded) {
            return responseBad = { status: false, code: HttpStatusCode.NotImplemented, message: 'Invalid token' };
        }
        /*if token It's right we send the response of controller*/
        return decoded;
    }

}