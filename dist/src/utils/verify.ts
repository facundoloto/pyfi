import { findByEmail } from "../components/users/services";
const { hash, compare } = require('bcrypt');

export const checkEmail = async (email:string):Promise<boolean> => {
    let emailUse:boolean = true;
    const response = await findByEmail(email);
    const isEmpty = Object.keys(response);
    
    if (!isEmpty.length) {
        emailUse = false;
        return emailUse;
    }
     
    return emailUse;
};

export const encryptPassword = async (password: string): Promise<string> => {
    let rounds: number = 10;
    const encryptedPassword: string = await hash(password, rounds);
    return encryptedPassword;
};

export const comparePassword = async (comparePassword: string, userPassword: string): Promise<boolean> => {
    let checkPassword: boolean = false;
    const match = await compare(comparePassword, userPassword);

    if (match) {
        checkPassword = true;
        return checkPassword;
    }

    return checkPassword;
};