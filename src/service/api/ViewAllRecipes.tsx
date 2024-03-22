import React, { useEffect, useState } from 'react';
import useGetUserId from '../../hooks/GetUserId';
import CommentForm from '../../components/CommentForm/CommentForm';
import LikeButton from '../../components/LikeButton/LikeButton';
import useGetUserName from '../../hooks/GetUserName';
import { Link, NavLink } from 'react-router-dom';

interface Comment {
  commentId: number;
  userId: number;
  recipeId: string;
  timeStamp: string;
  content: string;
  userName: string;
}

interface Post {
  id: number;
  userId: number;
  userName: string;
  title: string;
  categories: { id: number; recipeId: number; categories: string }[];
  ingredients: string;
  description: string;
  imageUrl: string;
  timeStamp: string;
  content: string;
  likeCount: number;
  comments: Comment[];
}

const ViewAllRecipes: React.FC = () => {
  const UserId = useGetUserId();
  const UserName = useGetUserName();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://projekt-recept20240315095654.azurewebsites.net/Recipe/ViewAllRecipes');
      const posts = await response.json() as Post[];
      setPosts(posts);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCommentSubmit = async (recipeId: number, content: string) => {
    try {
      const response = await fetch('https://projekt-recept20240315095654.azurewebsites.net/Comment/CreateComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'your-authorization-token', // Behövs detta ermmmmmm
        },
        body: JSON.stringify({ RecipeId: recipeId, UserId: UserId, UserName: UserName, Content: content }),
      });

      if (response.status === 200) {
        fetchPosts();
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment', error);
    }
  };

  if (isLoading) {
    return <img src='loading.svg' alt="Loading" />;
  }

  if (error) {
    return <div>Någonting gick fel! Försök igen... 😢</div>;
  }

  return (
    <div className='recipes'>
      <h2>Recept</h2>
      {posts.map((post) => (
        <ul key={post.id}>
          <li><h2>{post.title}</h2></li>
          <li><h2>👍{post.likeCount}<br /><LikeButton recipeId={post.id} /></h2></li>
          <section className="categoriesUl">Kategorier:
            {post.categories.map((category, index) => (
              <p key={index}>{category.categories}</p>
            ))}
          </section>
          <li><h3>{post.description}</h3></li>
          <li><h3>{post.userName + " UserId:" + post.userId}</h3></li>
          <img src={"./recipeImage/" + post.imageUrl + ".png"} alt={post.title} />
          <li><p>{post.timeStamp}</p></li>
          <li><p>Ingredienter: <br />{post.ingredients}</p></li>
          <NavLink to={`/home/${post.id}`}>
              <p>Recept: <br />{post.content}</p>
            </NavLink>
          <section className="categoriesUl">Kommentarer:
            {post.comments.map((comments, index) => (
              <p key={index}>{comments.content + " Namn:  " + comments.userName + " " + comments.timeStamp}</p>
            ))}
          </section><br />
          <li>
            <CommentForm recipeId={post.id} userId={UserId} onCommentSubmit={(recipeId, content) => handleCommentSubmit(recipeId, content)} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ViewAllRecipes;