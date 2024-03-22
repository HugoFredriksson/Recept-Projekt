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
      const response = await fetch('https://projekt-recept20240315095654.azurewebsites.net/Likes/LikeRecipe', {
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
        window.location.reload();
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
      {isLiked ? 'Gillad!' : 'Gilla'}
    </button>
  );
};

export default LikeButton;