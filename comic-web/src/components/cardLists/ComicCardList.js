import React from 'react';
import ComicCard from '../cards/ComicCard';
import search from '../input/search';

function ComicCardList(props){
    const {title, listItems} = props;
    const totalResult = listItems.length;
    return (
        <div className="list">
            <div className="d-flex flex-row justify-content-between align-items-end">
            <div className="list-header">{title}</div>
            </div>
            <div >{`Có ${totalResult} kết quả tìm kiếm`}</div>
            <div className="row list-items">
                {listItems.map((item,index)=>{
                    return (<div className="col-12 col-sm-6 col-md-3 m-0 p-0"><ComicCard item={item}/></div>);
                })}
            </div>
            {/* <div className="break-line"></div> */}
        </div>
    );
}

export default ComicCardList;