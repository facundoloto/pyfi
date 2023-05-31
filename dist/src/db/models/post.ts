//db/models/post.ts
import sequelizeConnection from '../../config/configModel';
import { DataTypes, Model } from 'sequelize';
import User from './user'; // Importa el modelo User
// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = sequelizeConnection;

// Definimos nuestra interfaz UserAttributes que define las propiedades del objeto User
interface PostAttributes {
  id?: number;
  id_user:number;
  image_post: string;
  description: string;
  fav?:number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Creamos nuestro modelo User
export class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public id_user!: number;
  public image_post !: string;
  public description!: string;
  public fav!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // public static associate(models: any) {
  //   Post.belongsTo(models.User,{
  //     as:"users",
  //     foreignKey:'id_user',
  //     targetKey:'id_user'
  //   });
  // }

}

// Configuramos el esquema de nuestro modelo User
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
    modelName:"Posts",
    // pasamos la instancia de la conexión de sequelize configurada arriba
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
