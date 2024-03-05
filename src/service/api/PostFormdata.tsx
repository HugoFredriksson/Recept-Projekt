import React, { useState, ChangeEvent, FormEvent } from 'react';

function PostReviewFetch() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([]);
    const [imgFile, setImgFile] = useState<File | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImgFile(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('description', description);
            categories.forEach(category => formData.append('categories[]', category));
            if (imgFile) {
                formData.append('image', imgFile);
            }

            const response = await fetch('https://localhost:7118/Recipe/CreateRecipe', {
                headers:{
                    "Content-Type": "Application/Json",
                }, 
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({'content':content,'title':title,'categories':categories,'imgFile':imgFile})
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response:', data);

            setTitle('');
            setContent('');
            setDescription('');
            setCategories([]);
            setImgFile(null);
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
            <h2>Lägg Till Ett Recept</h2>
            <div className="gridContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titel: </label><br />
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
                    <label htmlFor="content">Recept: </label>
                    <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br />
                    <label htmlFor="description">Beskrivning: </label><br />
                    <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />

                    <p>Välj Kategorier</p>
                    <div className="choseCategories">

                        <input type="checkbox" id="övrigt" value="övrigt" name="övrigt" onChange={handleCategoryChange} />
                        <label htmlFor="övrigt">övrigt</label>
                        <input type="checkbox" id="vegetarisk" value="vegetarisk" name="vegetarisk" onChange={handleCategoryChange} />
                        <label htmlFor="vegetarisk">vegetarisk</label>
                        <input type="checkbox" id="song" value="song" name="song" onChange={handleCategoryChange} />
                        <label htmlFor="song">Låt</label>
                        <input type="checkbox" id="game" value="game" name="game" onChange={handleCategoryChange} />
                        <label htmlFor="game">Spel</label><br />
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