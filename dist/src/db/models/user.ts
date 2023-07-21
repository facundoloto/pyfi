//db/models/users.ts
import sequelizeConnection from '../../config/configModel';
import { DataTypes, Model } from 'sequelize';

// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = sequelizeConnection;

// Definimos nuestra interfaz UserAttributes que define las propiedades del objeto User
interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password?: string;
  image_user?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Creamos nuestro modelo User
export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public image_user!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  // public static associate(models: any) {
  //   User.hasMany(models.Post,{as:"posts",foreignKey:"id_user"});
  // }

}

// Configuramos el esquema de nuestro modelo User
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    //modelName: "Users",
    tableName:"users",
    freezeTableName: true,
  }
);

export default User;
