import Dao from './../../classes/Dao';
import { User } from '../../db/models/user';
import { loginDto, userDto } from './userDto';

export default class UserDao extends Dao {

  async save(userDto: userDto): Promise<any> {
    try {

      const saveProfile = User.create(
        {
          name: userDto.name,
          email: userDto.email,
          password: userDto.password,
          image_user: userDto.image_user
        }
      );

      return saveProfile;

    } catch (error) {

      console.log('Error fetching user data:', error);

    }

  }

  async delete(idUser: number): Promise<any> {
    try {

      const deleteUser = User.destroy({ where: { id: `${idUser}` } });
      return deleteUser;

    } catch (error) {

      console.log('Error fetching user data:', error);

    }

  }

  async update(userDto: userDto): Promise<any> {
    try {

      const userUpdated = await User.update(
        {
          name: userDto.name,
          email: userDto.email,
          password: userDto.password,
          image_user: userDto.image_user
        },
        {
          where: {
            id: userDto.id,
          },
        }
      );

      return userUpdated;

    } catch (error) {
      console.log('Error fetching user data:', error);
    }

  };

  async findById(id: number): Promise<any> {
    try {

      const response: any = await User.findByPk(id);

      const userDto: userDto = {
        id: response.dataValues.id,
        name: response.dataValues.name,
        email: response.dataValues.email,
        image_user: response.dataValues.image_user
      }

      return userDto;

    } catch (error) {

      console.log('Error fetching user data:', error);

    }
  };

  /*only works for log in */
  async findByEmail(email: string) {

    const response = await User.findAll({
      where: { email: `${email}` },
    });

    if (response.length == 0) {
      return response;
    }

    const userDto: loginDto = {
      id: response[0].dataValues.id,
      email: response[0].dataValues.email,
      password: response[0].dataValues.password
    }

    return userDto;

  };

}

