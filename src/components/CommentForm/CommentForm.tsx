import React, { useState, ChangeEvent } from 'react';

interface CommentFormProps {
  recipeId: number;
  userId: number | null;
  onCommentSubmit: (recipeId: number, content: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ recipeId, userId, onCommentSubmit }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(event.target.value);
  };

  const submitComment = () => {
    if (commentContent.trim() !== '') {
      onCommentSubmit(recipeId, commentContent);
      setCommentContent('');
    }
  };

  return (
    <div>
      <textarea
        rows={4}
        cols={30}
        placeholder="Skriv din kommentar här..."
        value={commentContent}
        onChange={handleCommentChange}
      />
      <br />
      <button onClick={submitComment}>Lägg Till Kommentar</button>
    </div>
  );
};

export default CommentForm;