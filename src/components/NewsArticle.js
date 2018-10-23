import React from 'react';

const NewsArticle = (props) => {
    return ( 
        <article style={props.style}>
            <a href={props.content.url} target="_blank">
                <img src={props.content.urlToImage} alt={props.content.title} />
                <h1>{props.content.title}</h1>
            </a>
        </article>
     );
}
 
export default NewsArticle;