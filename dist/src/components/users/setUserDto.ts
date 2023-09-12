import { Request, Response } from 'express';
import { encryptPassword } from '../../utils/verify';
import { userDto } from './userDto';


async function setUserDto(req: Request, _res: Response) {
    const fileImage: any = req.file;
    const location: string = fileImage ? fileImage : "https://visualpharm.com/assets/336/User-595b40b65ba036ed117d26d4.svg";
    const hashPassword: string = await encryptPassword(req.body.password);

    const user: userDto = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        image_user: location
    };

    return user;
}

export default setUserDto;