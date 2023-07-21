import { Post } from '../../db/models/post';
import { User } from '../../db/models/user';
import { PostInterfaces } from './../../interfaces/interfaces';

export const findByIdUser = async (id_user: number): Promise<Object> => {
  const post: Object = await Post.findAll({
    where: { id_user: `${id_user}` },
  });

  return post;
};

export const savePost = async (post: PostInterfaces) => {
  const savePost = new Post(post);
  const postResponse = await savePost.save();

  return { postResponse };
}

export const findAll = async (): Promise<Object> => {
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

  return post;
};


export const updatePost = async (post: PostInterfaces) => {
  const postUpdate = await Post.update(
    {
      id_user: post.id_user,
      image_post: post.image_post,
      description: post.description,
    },
    {
      where: {
        id: post.id,
      },
    }
  );

  return postUpdate;
};

export const deletePost = async (idPost: string) => {
  try {
    const response = Post.destroy({ where: { id: `${idPost}` } });
    return (response);
  }
  catch (err) {
    return (err);
  }
};