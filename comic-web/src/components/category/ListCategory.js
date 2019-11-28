import React from 'react';
import CategoryCard from '../category/CategoryCard';

function CategoryList(props){
    const {title, listItems} = props;
    return (
        <div className="list">
            <div className="d-flex flex-row justify-content-between align-items-end">
            <div className="list-header">{title}</div>
            <a href="/" className="btn-see-more">Xem thêm</a>
            </div>
            <div className="row list-items">
                {listItems.map((item,index)=>{
                    const {thumbnail, category} = item;
                    return (<div className="col-12 col-sm-6 col-md-3 m-0 p-0"><CategoryCard thumbnail={thumbnail} category={category}/></div>);
                })}
            </div>
            {/* <div className="break-line"></div> */}
        </div>
    );
}

export default CategoryList;