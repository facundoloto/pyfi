import Dao from '../../classes/Dao';
import { Post } from '../../db/models/post';
import User from '../../db/models/user';
import { PostDto } from './postDto';


export default class PostDao extends Dao {

  async save(PostDto: PostDto): Promise<any> {
    try {
      const savePost = Post.create(
        {
          id_user: PostDto.id_user,
          image_post: PostDto.image_post,
          description: PostDto.description
        }
      );
      return { status: true, result: savePost };
    } catch (error) {
      return { status: false, result: error };
    }
  }

  async delete(idPost: string): Promise<any> {
    try {
      const deletePost = Post.destroy({ where: { id: `${idPost}` } });
      return { status: true, result: deletePost };
    } catch (error) {
      return { status: false, result: error };
    }
  }

  async update(PostDto: PostDto): Promise<any> {
    try {
      const postUpdated = await Post.update(
        {
          image_post: PostDto.image_post,
          description: PostDto.description,
        },
        {
          where: {
            id: PostDto.id,
          },
        }
      );
      return { status: true, result: postUpdated };
    } catch (error) {
      return { status: false, result: error };
    }

  };

  async findById(id: number): Promise<any> {
    try {
      const post = await Post.findByPk(id);
      return { status: true, result: post };
    } catch (error) {
      return { status: false, result: error };
    }
  };

  async findByIdUser(id_user: number): Promise<Object> {
    const id = String(id_user)
    const post: Object = await Post.findAll({
      where: { id_user: `${id}` },
    });
    return { status: true, result: post };
  };

  async findAll(): Promise<Object> {
    const post = await Post.findAll(
      {
        attributes: ['id', 'image_post', 'description', 'createdAt'],
        include: [{
          model: User, as: "users",
          attributes: ['id', 'name', 'image_user']
        }],
        order: [
          ['id', 'DESC'],
        ]
      });
    const response = { status: true, result: post };
    return response;
  }
}