export interface UserInterfaces {
  id?: number;
  name: string;
  email: string;
  password?: string;
  image_user?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface user {
//   from: string
//   to: string
//   subject: string
//   text: string
//   template: string
// }

export interface LoginInterfaces {
  email: string;
  password: string;
}

export interface PostInterfaces {
  id?: number
  id_user: number
  image_post: string
  description: string
}

interface UserPostAttributes {
  id_user?: number;
  id_post?: number;
}

interface JWTData {
  user: User;
}