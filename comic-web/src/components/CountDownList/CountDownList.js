import React from 'react';
import CountDownCard from '../cards/CountDownCard';

function CountdownList(props){
    const {title, listItems} = props;
    return (
        <div className="list">
            <div className="d-flex flex-row justify-content-between align-items-end">
            <div className="list-header">{title}</div>
            <a href="/" className="btn-see-more">Xem thêm</a>
            </div>
            <div className="row list-items">
                {listItems.splice(0,4).map((item,index)=>{
                    const {thumbnail, title, publicTime} = item;
                    return (<div className="col-3 m-0 p-0"><CountDownCard thumbnail={thumbnail} title={title} publicTime={publicTime}/></div>);
                })}
            </div>
            {/* <div className="break-line"></div> */}
        </div>
    );
}

export default CountdownList;