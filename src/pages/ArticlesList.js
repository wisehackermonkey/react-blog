import React from "react";
import articlesContent from "./article-content"
import { Link } from "react-router-dom";
const ArticlesList = () => {
    const articles = articlesContent
    return (
        <>
            <h1>Articles</h1>

            {
                articles.map((artile, key) => (
                    <Link className="article-list-item" key={key} to={`/article/${artile.name}`}>
                        <h3  >{artile.title}</h3>
                    </Link>
                ))
            }

        </>
    )
}

export default ArticlesList;