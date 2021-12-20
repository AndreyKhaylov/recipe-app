import React, { FC } from "react";

interface IInstructions {
    title: string,
    steps: Array<string>,
}

export const Instructions: FC<IInstructions> = ({ title, steps }) => {
    return (
        <section>
            <h2>{title}</h2>
            {
                steps.map((s, i) => (
                    <p key={i}>{s}</p>
                ))
            }
        </section>
    );
}