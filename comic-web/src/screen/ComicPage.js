import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import Rating from 'react-rating';
import Pagignation from '../components/pagination/Pagination';
import {ListComics} from '../common/constant/comics';
import {numberWithCommas} from '../common/function/displayNumber';
import { categories } from '../common/constant/categories';

const ComicPage = (props)=>{
    let {slug} =  useParams();
    const item =  ListComics.find(element=>element && element.slug === slug);
    const {src, comicName, author,total, current,rate,views,favorites, category,listChapters,desc} = item;
    const displayViews = numberWithCommas(views);
    const [isFavorite,setIsFavorite] = useState(false);
    const [favoritesDisplay,setfavoritesDisplay] = useState(numberWithCommas(favorites));
    const firstChap = listChapters[0];

    const handleClickFavorite = async(e)=>{
        e.preventDefault();
        setIsFavorite(!isFavorite);
    }

    const renderCategory=(category)=>{
        return category.map((item)=><a href="#" className="category-link">{item.category}</a>) 
    }

    const renderListChapter=(listChapters)=>{
        return listChapters.map((item,index)=><div className="col-4 col-sm-3 col-md-2 m-1 p-0">
            <a className=" chapter-link d-flex align-items-center justify-content-center text-decoration-none text-white"
            href={`/comic/${slug}/${item.id}`}>Chương {item.id}</a>
            </div>)
    }

    return(
        <section id="comic-page">
            <div className="container">
            <div className="page-header">
            <div className="cover-page">
                <img className="img-fluid"src={src} alt="cover"></img>
            </div>
            <div className="overlay"></div>
            <div className="gradient-overlay"></div>
            <div className="quick-info">
                <div className="d-flex h-100 flex-column align-items-center justify-content-end">
                    <h2 className="comic-name">{comicName}</h2>
                    <div className="author">{author}</div>
                    <div className="d-flex flex-row">
                        <div className="rating d-md-block d-none">   <Rating  
                            fractions={2} 
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            initialRating={rate} readonly/>
                            <span className="point">{rate}</span>
                        </div>
                        <div ><i class="fas fa-eye"></i> <span className="views">{displayViews}</span></div>
                        <div className="favorites"><i class="fas fa-heart"></i><span className="favorite-number">{favoritesDisplay}</span></div>
                    </div>
                    <div className="d-flex flex-row mt-3">
                        <a class="my-btn standard-btn" href={`/comic/${slug}/${firstChap.id}`}>Đọc ngay</a>
                        <div onClick={handleClickFavorite} className="my-btn love-btn">{isFavorite?<i class="fas fa-heart"></i>:<i class="far fa-heart"></i>}{`${isFavorite? ' Hủy yêu thích':' Yêu thích'}` }</div>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="list-header">Thông tin cơ bản</div>
            <div><b>Tên truyện : </b>{comicName}</div>
            <div><b>Tác giả : </b>{author}</div>
            <div><b>Số lượng chương: </b>{total==='---'?'Đang phát hành': total}</div>
            <div><b>Chương đã phát: </b>{current}</div>
            <div><b>Thể loại: </b>{
               renderCategory(category)
                }
            </div>
            <div><b>Tóm tắt:</b></div>
            <div>{desc}</div>
            <div className="list-header">Đã phát hành</div>
            <div className="row m-0 p-0">{
                renderListChapter(listChapters)
                }</div>
            </div>
            <div className="d-flex justify-content-center">
                <Pagignation total={listChapters.length} limit={20} ></Pagignation>
            </div>
        </section>
    );

}

export default ComicPage;