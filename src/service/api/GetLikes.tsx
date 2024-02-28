import React from 'react';
import { useEffect, useState} from 'react';

const path = "https://localhost:7274/Recipe/ViewAllRecipes";

interface Post {
    recipeId: number;
    userId: number;
}
