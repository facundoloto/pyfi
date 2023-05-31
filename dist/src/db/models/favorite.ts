// //db/models/ .ts
// import sequelizeConnection from '../../../config/configModel';
// import { DataTypes, Model } from 'sequelize';

// // Aquí puedes configurar tu conexión a la base de datos.
// const sequelize = sequelizeConnection;

// // Definimos nuestra interfaz UserAttributes que define las propiedades del objeto User
// interface FavoriteAttributes {
//   id?: number;
//   id_post:number;
//   id_user: number;
//   fav:boolean ;
// }

// export class Favorite extends Model<FavoriteAttributes> implements FavoriteAttributes {
//     public id!: number;
//     public id_user!: number;
//     public id_post !: number;
//     public fav!: boolean;
//     public createdAt!: Date;
//     public updatedAt!: Date;

// static associate(models: any) {
//     // Aquí puedes definir las relaciones que tenga el modelo User con otras tablas.
//     Favorite.belongsTo(models.Post, { as: "post", foreignKey: "id_post" })
//     Favorite.belongsTo(models.User, { as: "user", foreignKey: "id_user" })
//   }

// }
// // Configuramos el esquema de nuestro modelo User
// Favorite.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     id_user: {
//       type: DataTypes.NUMBER,
//       allowNull: false
//     },
//     id_post: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false
//     },
//     fav: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false
//     },
//   },
//   {
//     tableName: 'favorite',
//     sequelize // pasamos la instancia de la conexión de sequelize configurada arriba
//   }
// );

// export default Favorite;
