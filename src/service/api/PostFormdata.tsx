import React, { useState, ChangeEvent, FormEvent } from 'react';
import useGetUserId from '../../hooks/GetUserId';
import useGetUserName from '../../hooks/GetUserName';

function PostReviewFetch() {
    const userId  = useGetUserId();
    const userName = useGetUserName();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('ingredients', ingredients)
            formData.append('description', description);
            categories.forEach(category => formData.append('categories[]', category));
            if (imageUrl) {
                formData.append('image', imageUrl);
            }
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            console.log(JSON.stringify(formData));
            
            const response = await fetch('https://localhost:7118/Recipe/CreateRecipe', {
                method: 'POST',
                mode: "cors",
                headers: myHeaders,
                body: JSON.stringify({'UserName': userName,'UserId': userId ,'content':content,'title':title, 'description': description,'categories':categories, 'ingredients':ingredients,'imageUrl':imageUrl})
            });

            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response:', data);

            setTitle('');
            setContent('');
            setIngredients('');
            setDescription('');
            setCategories([]);
            setImageUrl(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setCategories([...categories, value]);
        } else {
            setCategories(categories.filter(cat => cat !== value));
        }
    };

    return (
        <div>
            <h2>Skapa ett recept!</h2>
            <div className="gridContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titel: </label><br />
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
                    <label htmlFor="content">Recept: </label><br></br>
                    <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br />
                    <label htmlFor="ingredients">Ingredienter: </label><br></br>
                    <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea><br />
                    <label htmlFor="description">Beskrivning: </label><br /><br></br>
                    <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />

                    <p>Välj Kategorier</p>
                    <div className="choseCategories">
                        <input type="checkbox" id="movie" value="movie" name="movie" onChange={handleCategoryChange} />
                        <label htmlFor="movie">Film</label><br></br>
                        <input type="checkbox" id="book" value="book" name="book" onChange={handleCategoryChange} />
                        <label htmlFor="book">Bok</label><br></br>
                        <input type="checkbox" id="song" value="song" name="song" onChange={handleCategoryChange} />
                        <label htmlFor="song">Låt</label><br></br>
                        <input type="checkbox" id="game" value="game" name="game" onChange={handleCategoryChange} />
                        <label htmlFor="game">Spel</label><br /><br></br>
                    </div>

                    <label htmlFor="image">Välj bild - valfritt : </label>
                    <input type="file" onChange={handleImageChange} /><br /><br />
                    <button type="submit">Ladda upp</button>
                </form>
            </div>
        </div>
    );
}

export default PostReviewFetch;