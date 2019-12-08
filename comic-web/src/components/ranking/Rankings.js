import React from 'react';
import RankingCard from './RankingCard';

const Ranking=(props)=>{
    const {list} = props;
    return(
        <div id="Ranking">
            <div className="title list-header">Bảng xếp hạng</div>
            <div className="ranking-wrapper">
                <div className="ranking-body">
                {list.slice(0,10).map((item,index)=>{
                    const {src,name,views, rate,author,slug} = item;
                    return(<RankingCard 
                        thumbnail={src} 
                        position={index+1} 
                        name={name} 
                        views={views} 
                        ratePoint={rate} 
                        author={author}
                        slug={slug}/>);
                })}
                </div>
                
            </div>
        </div>
    );
}

export default Ranking;