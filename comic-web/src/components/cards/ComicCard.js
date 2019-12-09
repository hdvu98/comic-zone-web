import React from 'react';
import {useHistory} from 'react-router-dom';

function ComicCard(props){
        let history = useHistory();
        const {item} = props;
        const {src, comicName, author,total, current,slug} = item;
        const handleClick=(e)=>{
            e.preventDefault();
            history.push(`/comic/${slug}`)
        }
        return (
            <div className="card" onClick={handleClick}>
                <div className="img-area">
                    <img className="card-thumbnail" src={src} alt=""></img>
                </div>
                <div className="card-content">
                    <div className="name"><b>{comicName}</b></div>
                    <div className="numberOfChapters"> {current}{' '}/{' '}{total==='---'? 'Đang phát hành': total}</div>
                </div>
            </div>
        );
}
export default ComicCard;