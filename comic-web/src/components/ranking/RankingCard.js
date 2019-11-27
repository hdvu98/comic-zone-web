import React from 'react';
import Rating from 'react-rating';

const RankingCard = (props)=>{
    const {thumbnail,position,name,views, ratePoint,author} = props;

    return (
        <div className="ranking-card">
            <div className="content d-flex flex-row flex-nowrap align-items-center">
            <div className="rank">{position}</div>
                <div className="thumbnail">
                    <img className="thumbnail-fluid" src={thumbnail} alt={name}></img>
                </div>
                <div className="info w-100 d-flex flex-row flex-wrap justify-content-between">
                <div className="d-flex flex-column">
                    <div>{name}</div>
                    <div>{author}</div>
                </div>

                <div className="d-flex flex-row">
                <div>   <Rating  
                        fractions={2} 
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={ratePoint} readonly/>
                </div>
                <div>{views}</div>
                </div>
                </div>
            </div>
        </div>
    );

}

export default RankingCard;