/*
repository contain methods that we use in the model,
I decided use a interface 'cause It's more easy to use than a class
*/
import { UserEntity } from "./user.entity"

export interface userRepository {
    findUserById(id: number): Promise<UserEntity | null>;
    registerUser({ name, email, password, image_user }): Promise<UserEntity | null>
}