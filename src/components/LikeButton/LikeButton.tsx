import React, { useState } from 'react';
import useGetUserId from '../../hooks/GetUserId';

interface LikeButtonProps {
  recipeId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ recipeId }) => {
  const userId = useGetUserId();
  const [isLiked, setIsLiked] = useState(false);

  const likeRecipe = async () => {
    try {
      const response = await fetch('https://localhost:7118/Likes/LikeRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'your-authorization-token', // replace with your actual token
        },
        body: JSON.stringify({ RecipeId: recipeId, UserId: userId }),
      });

      if (response.status === 200) {
        // Successful like
        setIsLiked(true);
      } else {
        // Handle the error
        console.error('Failed to like recipe');
      }
    } catch (error) {
      console.error('Error liking recipe', error);
    }
  };

  return (
    <button onClick={likeRecipe} disabled={isLiked}>
      {isLiked ? 'Liked!' : 'Like'}
    </button>
  );
};

export default LikeButton;