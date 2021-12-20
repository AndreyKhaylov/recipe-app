import React, { FC } from "react";
import { Ingredient } from "./Ingredient";

interface IIngredientsList {
    list: Array<any>,
}

export const IngredientsList:FC<IIngredientsList> = ({ list }) => {
    return (
        <ul className="ingredients">
            {
                list.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))
            }
        </ul>
    );
}