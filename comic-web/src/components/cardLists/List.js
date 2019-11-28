import React from 'react';
import Card from '../cards/Card';

function List(props){
    const {title, listItems} = props;
    return (
        <div className="list">
            <div className="d-flex flex-row justify-content-between align-items-end">
            <div className="list-header">{title}</div>
            <a href="/" className="btn-see-more">Xem thêm</a>
            </div>
            <div className="row list-items">
                {listItems.slice(0,8).map((item,index)=>{
                    return (<div className="col-12 col-sm-6 col-md-3 m-0 p-0"><Card item={item}/></div>);
                })}
            </div>
            {/* <div className="break-line"></div> */}
        </div>
    );
}

export default List;