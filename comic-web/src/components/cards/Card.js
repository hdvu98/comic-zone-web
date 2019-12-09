import React from 'react';

function Card(props){

        const {item} = props;
        const {src, comicName, chapterName, chapter} = item;
        return (
            <div className="card">
                <div className="img-area">
                    <img className="card-thumbnail" src={src} alt=""></img>
                </div>
                <div className="card-content">
                    <div className="name"><b>{comicName}</b></div>
                    <div className="chapter">Chương {chapter}</div>
                </div>
            </div>
        );
}
export default Card;