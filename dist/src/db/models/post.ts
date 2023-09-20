//db/models/post.ts
import sequelizeConnection from '../../config/configModel';
import { DataTypes, Model } from 'sequelize';
import User from './user'; // Importa el modelo User
// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = sequelizeConnection;

// Definimos nuestra interfaz UserAttributes que define las propiedades del objeto User
// interface PostAttributes {
//   id?: number;
//   id_user:number;
//   image_post: string;
//   description: string;
//   fav?:number;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// Creamos nuestro modelo User
export class Post extends Model {
  public id!: number;
  public id_user!: number;
  public image_post !: string;
  public description!: string;
  public fav!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

}


Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    image_post: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: "Posts",
  }
);

Post.belongsTo(User, {
  foreignKey: 'id_user',
  as: 'users',
});

User.hasMany(Post, {
  foreignKey: 'id_user',
  as: 'posts',
});

export default Post;
