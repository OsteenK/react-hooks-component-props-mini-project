import React from "react";


    const Article = ({ title, date, minutes, preview }) => {
        return (
            <article>
                <h3> {title} </h3>
                <small>{date ? date : 'January 1, 1970'}</small>
                <small>{minutes} min read</small>
                <p> {preview} </p>
            </article>
        )
    };
export default Article;