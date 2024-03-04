import React from 'react';
import Footer from '../../components/Footer/Footer';

interface Props {}

const AddRecipePage = (props: Props) => {
    const validateFile = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        const fileSize = fileInput.files![0].size; // in bytes
        const maxSize = 100 * 1024; // 100 KB

        const fileSizeError = document.getElementById('fileSizeError') as HTMLElement;

        if (fileSize > maxSize) {
            fileSizeError.textContent = 'File size exceeds 100 KB limit.';
            fileInput.value = ''; // Clear the file input
        } else {
            fileSizeError.textContent = '';
        }
    };

    return (
        <div className="App">
            <main>
                <div className='grid-container'>
                    <h2>Lägg Till Recept</h2>
                    <form id="addRecipe">
                        <label htmlFor="title">Titel:  </label>
                        <input type="text" id="title" /><br></br><br></br>

                        <label htmlFor="ingredients">Ingredienter:  </label>
                        <input type="text" id="ingredients" /><br></br><br></br>

                        <label htmlFor="fileInput">Välj fil: Max 100 Kb  </label>
                        <input type="file" id="fileInput" accept=".jpg, .jpeg, .png" onChange={validateFile} />
                        <small id="fileSizeError"></small><br></br><br></br>

                        <label htmlFor="description">Beskrivning:  </label>
                        <input type="text" id="description" /><br></br><br></br>

                        <label htmlFor="content">Innehåll:  </label>
                        <input type="text" id="content" /><br></br><br></br>

                        <input type="submit"></input>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AddRecipePage;