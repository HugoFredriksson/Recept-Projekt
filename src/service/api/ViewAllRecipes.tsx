import React from 'react';
import { useEffect, useState} from 'react';

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
    comments: {}[];
}

export default function ViewAllRecipes() {
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
                <li><h2>👍{post.likeCount}</h2></li>
                <section className="categoriesUl">Kategorier:
                            {post.categories.map((category, index) => (
                                <p key={index}>{category.categories}</p>
                            ))}
                        </section>
                <li><h3>{post.description}</h3></li>
                <li><h3>{post.userName + " UserId:" + post.userId}</h3></li>
                <li><img src={post.imageUrl + ".png"} alt={post.title} /></li>
                <li><p>{post.timeStamp}</p></li>
                <li><p>{post.ingredients}</p></li>
                <li><p>{post.content}</p></li>
                <li>
                
                </li>
              </ul>
            ))}
        </div>
      );
    }