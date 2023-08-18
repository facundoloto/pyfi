/*class to map entity in db*/
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
    id?: number;
    name: string;
    email: string;
    password: string;
    image_user: string;

    constructor({ id, name, email, password, image_user }: { id: number, name: string, email: string; password: string, image_user: string }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image_user = image_user;
    }

}