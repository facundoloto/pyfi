export interface userDto {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    image_user?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface loginDto {
    id: number;
    email: string;
    password: string;
}