import React, { useState } from 'react';
import { Recipe } from './Recipe';

interface RecipeFormProps {
    addRecipe: (recipe: Recipe) => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({ addRecipe }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newRecipe: Recipe = {
            id: Date.now(),
            title,
            ingredients: ingredients.split(','),
            instructions,
        };
        addRecipe(newRecipe);
        setTitle('');
        setIngredients('');
        setInstructions('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe title"
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder='Recipe Ingredients, separate by comma'
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
            />
            <button type="submit">Add Recipe</button>
        </form>
    )
}
