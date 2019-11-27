import React from 'react';
import RankingCard from './RankingCard';

const Ranking=(props)=>{
    const {list} = props;
    return(
        <div id="Ranking">
            <div className="title list-header">Bảng xếp hạng</div>
            <div className="ranking-body">
                {list.map((item,index)=>{
                    const {thumbnail,name,views, ratePoint,author} = item;
                    return(<RankingCard 
                        thumbnail={thumbnail} 
                        position={index+1} 
                        name={name} 
                        views={views} 
                        ratePoint={ratePoint} 
                        author={author}/>);
                })}
            </div>
        </div>
    );
}

export default Ranking;