import React, {FC} from 'react';

interface IRecipe {
    name?: string,
}

export const Recipe:FC<IRecipe> = ({ name }) => {
    return (
        <section>
            <h1>{name}</h1>
        </section>
    );
}