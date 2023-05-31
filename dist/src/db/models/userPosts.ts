// user-group.model.ts
import sequelizeConnection from '../../config/configModel';
import { Model, DataTypes } from 'sequelize';

const sequelize = sequelizeConnection;

interface UserPostAttributes  {
    id?:number;
    id_user?: number;
    id_post?:number;
  }

class UserPost extends Model<UserPostAttributes> implements UserPostAttributes {
  public id!: number;
  public id_user!: number ;
  public id_post!: number;

  // public static associate(models: any) {
  // //  UserPost.belongsTo(models.User);
  // //   UserPost.belongsTo(models.Post); 
  //   // User.belongsToMany(models.User , {as:"users", through:UserPost});
  //   // Post.belongsToMany(models.Post, {as:"posts", through: UserPost});
  // }

}

UserPost.init(
  {  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_post: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'UserPosts',
  }
);
 
export { UserPost };