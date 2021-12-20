import React, { FC } from 'react';
import { Recipe } from './components';

interface IApp {
    title: string,
    recipes: any,
}

export const App:FC<IApp> = ({ title, recipes }) => {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div>
                {
                    recipes.map((recipe, i) => (
                        <Recipe key={i} {...recipe} />
                    ))
                }
            </div>
        </article>
    );
}