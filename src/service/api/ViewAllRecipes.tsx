import React from 'react';
import { useEffect, useState} from 'react';

const path = "https://localhost:7274/Recipe/ViewAllRecipes";

interface Post {
    id: number;
    userId: number;
    userName: string;
    title: string;
    description: string;
    imageUrl: string;
    timeStamp: string;
    content: string;
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
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Something went wrong! Please try again.</div>
    }

    return (
        <div className='recipes'>
          <h1 className='mb-4 text-2xl'>Recept</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <h3>{post.userName + " UserId:" + post.userId}</h3>
                <img src={post.imageUrl + ".svg"} alt={post.title} />
                <p>{post.timeStamp}</p>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }