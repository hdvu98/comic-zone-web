import React from 'react';

function ComicCard(props){

        const {item} = props;
        const {src, comicName, author,total, current} = item;
        return (
            <div className="card">
                <div className="img-area">
                    <img className="card-thumbnail" src={src} alt=""></img>
                </div>
                <div className="card-content">
                    <div className="name">{comicName}</div>
                    <div className="author"> {author}</div>
                    <div className="numberOfChapters"> {current}/{total}</div>
                </div>
            </div>
        );
}
export default ComicCard;