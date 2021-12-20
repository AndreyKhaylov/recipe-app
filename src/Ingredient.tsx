import React, { FC } from "react";

interface IIngredient {
    amount: number,
    measurement: string,
    name: string,
}

export const Ingredient:FC<IIngredient> = ({ amount, measurement, name }) => {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}