import React from 'react';
import { useEffect, useState} from 'react';
import useGetUserId from '../../hooks/GetUserId';
import LikeButton from '../../components/LikeButton/LikeButton';

const path = "https://localhost:7118/Recipe/ViewAllRecipes";

interface Post {
    id: number;
    userId: number;
    userName: string;
    title: string;
    categories: { id: number; recipeId: number; categories: string;}[];
    ingredients: string;
    description: string;
    imageUrl: string;
    timeStamp: string;
    content: string;
    likeCount: number;
    comments: { commentId: number; userId: number; recipeId: string; timeStamp: string; content: string; userName: string;}[];
}

export default function ViewAllRecipes() {
  const UserId = useGetUserId();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
          setIsLoading(true);
          try {
            const response = await fetch(path);
            const posts = (await response.json()) as Post[];
            setPosts(posts);
          } catch (e: any) {
            setError(e);
          } finally {
            setIsLoading(false);
          }      
            setIsLoading(false);
        };

        fetchPosts();
        console.log(posts);
    }, []);

    if (isLoading) {
      return <img src='loading.svg'></img>
    }

    if (error) {
      return <div>Something went wrong! Please try again.😢</div>
    }

    return (
        <div className='recipes'>
          <h2>Recept</h2>
            {posts.map((post) => (
              <ul key={post.id}>
                <li><h2>{post.title}</h2></li>
                <li><h2>👍{post.likeCount}<LikeButton recipeId={post.id} /></h2></li>
                <section className="categoriesUl">Kategorier:
                            {post.categories.map((category, index) => (
                                <p key={index}>{category.categories}</p>
                            ))}
                        </section>
                <li><h3>{post.description}</h3></li>
                <li><h3>{post.userName + " UserId:" + post.userId}</h3></li>
                <img src={"./recipeImage/" + post.imageUrl + ".png"}alt={post.title} /> 
                <li><p>{post.timeStamp}</p></li>
                <li><p>{post.ingredients}</p></li>
                <li><p>{post.content}</p></li>
                <section className="categoriesUl">Kommentarer:
                            {post.comments.map((comments, index) => (
                                <p key={index}>{comments.content + " Namn:  " + comments.userName + comments.timeStamp}</p>
                            ))}
                        </section>
                <li>
                
                </li>
              </ul>
            ))}
        </div>
      );
    }