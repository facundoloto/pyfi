import { User } from '../../db/models/user';
import { UserInterfaces } from './../../interfaces/interfaces';

export const findByEmail = async (email: string): Promise<Object> => {
  const user = await User.findAll({
    where: { email: `${email}` },
  });

  return user;
};

export const findUserByPk = async (id: number | undefined) => {
  const user = await User.findByPk(id);
  return user;
};

export const saveUser = async (user: UserInterfaces) => {
 
    const profileUser = new User(user);
    const saveProfile = await profileUser.save();
    return saveProfile;
}


export const updateUser = async (user: UserInterfaces) => {

  const userUpdated = await User.update(
    {
      name: user.name,
      email: user.email,
      password: user.password,
      image_user: user.image_user
    },
    {
      where: {
        id: user.id,
      },
    }
  );

  return userUpdated;
};

export const deleteProfileUser = async (idUser: number) => {
  try {
    const response = User.destroy({ where: { id: `${idUser}` } });
    return (response);
  }
  catch (err) {
    return (err);
  }
};