import React, {FC} from 'react';

interface IRecipe {
    name?: string,
}

export const Recipe:FC<IRecipe> = ({ name = "appRecipe" }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}