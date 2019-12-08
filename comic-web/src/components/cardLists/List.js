import React from 'react';
import Card from '../cards/Card';
import {ListComics} from '../../common/constant/comics';
function List(props){
    const {title, listItems} = props;
    const items = listItems.sort((a, b) =>{
        var dateAStr = a.date.split("/");
        var dateBStr = b.date.split("/");
        var dateA = new Date(dateAStr[2], dateAStr[1] - 1, dateAStr[0]);
        var dateB = new Date(dateBStr[2], dateBStr[1] - 1, dateBStr[0])
        if (dateA > dateB) {
            return -1;
        }
        if (dateB < dateA) {
            return 1;
        }
        return 0;
    });

    const calcTime=(time)=>{
        var date = new Date();
        var preDateStr = time.split("/");
        var preDate = new Date(preDateStr[2], preDateStr[1] - 1, preDateStr[0]);
        var times = Math.abs(date.getTime() - preDate.getTime());
        var day = parseInt(times/(1000 * 3600 * 24));
        var hour = parseInt(times/(1000 * 60 *60));
        var min = parseInt(times/(1000 *60 ));
        if(day>0) return day + ' ngày trước';
        if(hour>0 && hour < 24) return hour + ' giờ trước';
        if(min<60) return min+ ' phút trước';
    }

    calcTime('10/12/2019');

    return (
        <div className="list">
            <div className="d-flex flex-row justify-content-between align-items-end">
            <div className="list-header">{title}</div>
            <a href="/" className="btn-see-more">Xem thêm</a>
            </div>
            <div className="row list-items">
                {items.slice(0,8).map((item,index)=>{
                    const i = ListComics.find(comic=>comic.comicName === item.comicName);
                    const {slug} = i;
                    return (<div className="col-12 col-sm-6 col-md-3 m-0 p-0"><a href={`/comic/${slug}/${item.id}`}><Card item={item}/>
                    <div className="times">{calcTime(item.date)}</div>
                    </a>
                    </div>);
                })}
            </div>
            {/* <div className="break-line"></div> */}
        </div>
    );
}

export default List;