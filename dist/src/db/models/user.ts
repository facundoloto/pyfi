//db/models/users.ts
import sequelizeConnection from '../../config/configModel';
import { DataTypes, Model } from 'sequelize';
// import { UserInterfaces } from '../../interfaces/interfaces';
// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = sequelizeConnection;


// Creamos nuestro modelo User
export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public image_user!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
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
    tableName: "Users",
    freezeTableName: true,
  }
);

export default User;
