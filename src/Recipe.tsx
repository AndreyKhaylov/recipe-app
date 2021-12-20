import React, {FC} from 'react';

import { IngredientsList } from "./IngredientsList";
import { Instructions } from "./Instructions";

interface IRecipe {
    name?: string,
    ingredients: Array<any>,
    steps: Array<string>,
}

export const Recipe:FC<IRecipe> = ({ name, ingredients, steps  }) => {
    return (
        <section>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}