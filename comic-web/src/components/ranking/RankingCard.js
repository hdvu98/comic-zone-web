import React from 'react';
import Rating from 'react-rating';

const RankingCard = (props)=>{
    const {thumbnail,position,name,views, ratePoint,author, slug} = props;
    let postStr=null;

    switch(position){
        case 1:{
            postStr='first';
            break;
        }
        case 2:{
            postStr='second';
            break;
        }
        case 3:{
            postStr='third';
            break;
        }
        default:
            break;
    }

    return (
        <div className="ranking-card">
            <a className="text-decoration-none ranking-link" href={`/comic/${slug}`}>
            <div className="content d-flex flex-row flex-nowrap align-items-center">
                <div className="thumbnail">
                    <img className="thumbnail-fluid" src={thumbnail} alt={name}></img>
                </div>
                <div className={`rank ${postStr?  `${postStr}`:''}`}>{position}</div>
                <div className="info w-100 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <div className="d-flex flex-column flex-1">
                    <div className="name">{name}</div>
                    <div className="author">{author}</div>
                </div>

                <div className="d-flex flex-row flex-1 justify-content-between flex-wrap">
                <div className="rating d-md-block d-none">   <Rating  
                        fractions={2} 
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={ratePoint} readonly/>
                        <span className="point">{ratePoint}</span>
                </div>
                <div className="d-md-block d-none">{views}</div>
                </div>
                </div>
            </div>
            </a>
        </div>
    );

}

export default RankingCard;