import React, {FC} from 'react';

interface IRecipe {
    name?: string,
    ingredients: Array<any>,
    steps: Array<string>,
}

export const Recipe:FC<IRecipe> = ({ name, ingredients, steps  }) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {
                    ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient.name}</li>
                    ))
                }
            </ul>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                    {
                        steps.map((step, i) => (
                            <p key={i}>{step}</p>
                        ))
                    }
            </section>
        </section>
    );
}