import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FormControl,NativeSelect,FormHelperText} from '@material-ui/core';
import Rating from 'react-rating';
import $ from 'jquery';
import ImageGallery from 'react-image-gallery';
import {chapterList} from '../common/constant/chapterList';
import {ListComics} from '../common/constant/comics';
import CommentForm from '../components/comment/CommentForm';
import CommentList from '../components/comment/CommentList';
import {comments} from '../common/constant/comments';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color:"#000 !important",
      background:"white",
    },
    select: {
      color:'#000  !important',
      padding: '10px'
     
    },
    root:{
        color: '#000'
    },
  }));

 const imageDisplay={
     maxWidth: "100%",
     textAlign: "center"
 } 

const ReadingScreen =(props)=>{
    const classes = useStyles();
    const {id, slug}=useParams();
    const [state,setState] = useState({id: id, slug: slug});
    const comic = ListComics.find(item=>item.slug=== state.slug);
    const item = chapterList.find(item=>item.id === state.id && item.comicName === comic.comicName);
    const [modeDisplay,setModeDisplay] = useState(false);
    const [fixed,setFixed]= useState(false);
    const [activePage,setActivePage]=useState(0);
    const totalPage = item.pageList.length;
    
    useEffect(()=>{
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
           !fixed &&setFixed(true);
          } else {
            fixed && setFixed(false);
          }
        });
      })

    const handleChangePageDisplay=(e)=>{
        e.preventDefault();
        setActivePage(parseInt(e.target.value));
    }

    const renderDefault=(pageList)=>{
        return (   <div className="reading-area d-flex flex-column align-items-center bg-white">
                    {pageList.map(item=>
                    <img className="img-fluid d-block" src={item.src} alt=""></img>
                    )}
                </div>);
    }
    const renderPageOtion =(totalPage)=>{
    const items = []
    for(let i =0 ;i < totalPage;i++){
        items.push(<option value={i}> {`Trang ${i+1}`}</option>)
    }
    return items;
}

    const renderSlide=(pageList)=>{
        let images = [];
        pageList.map(item=>{
            let image ={
                thumbnail: item.src,
                original: item.src
            }
            images.push(image);
        })
        return (<div><div className="reading-area text-center bg-white">
            <div id="slide-reading" className="slide-mode">
            <ImageGallery items={images} 
            maxWidth='100%'
            maxHeigth='100%'
            originalClass={imageDisplay} 
            showPlayButton={false} 
            showThumbnails={false} 
            infinite={false}
            showIndex={false}
            startIndex={activePage}
            onSlide={()=>{$("#slide-reading")[0].scrollIntoView();}}
            preventDefaultTouchmoveEvent={true}
            ></ImageGallery>
            </div>
            </div>
            <div className={`page-control justify-content-center row m-0 p-0 ${fixed && modeDisplay?'fixed-bottom':''}`}>
                <div className="d-block align-items-center d-flex">
                <button disabled={activePage===0} 
             onClick={()=>setActivePage(activePage-1)}
            className={`control-btn ${activePage===0 ? 'disabled':''}`}><i class="fas fa-chevron-left"></i></button>
            <FormControl className={classes.formControl}>
                <NativeSelect
                onChange={handleChangePageDisplay}
                value={activePage}
                name="age"
                classes={classes}
                inputProps={{ 'aria-label': 'chapter' }}
                >
                    {renderPageOtion(totalPage)}
                    {/* {ListComics[id].listChapters.map((item)=><option value={item.id}> {`Chương ${item.id}`}</option>)} */}
                </NativeSelect>
            </FormControl> / {totalPage}
            <button disabled={activePage === totalPage-1} 
            onClick={()=>setActivePage(activePage+1)} 
            className={`control-btn ${activePage===totalPage-1 ? 'disabled':''}`}><i class="fas fa-chevron-right"></i></button>
            </div>
            </div>
            </div>);
    }

    const handleSwitchChange =(e)=>{
        e.preventDefault();
        setModeDisplay(!modeDisplay);
        $("html, body").animate({ scrollTop: 0 }, 0);
    }
    return(<section id="reading">
        <div className="container">

        <h2 className="text-center pt-3">{item.comicName}</h2>
        <div className={`page-control row m-0 p-0 ${fixed && !modeDisplay?'fixed-bottom':''}`}>
        <div className="col-lg-4 d-none d-lg-block"></div>   
        <div className="col-12 col-lg-4 d-flex flex-row justify-content-center">
            <button disabled={item.id==='1'} 
             onClick={()=>setState({...state,id: (parseInt(item.id)-1).toString()})}
            className={`control-btn ${item.id==='1'?'disabled':''}`}><i class="fas fa-arrow-circle-left"></i></button>
            <div>
            <FormControl className={classes.formControl}>
                <NativeSelect
                value={item.id}
                name="chapter"
                classes={classes}
                inputProps={{ 'aria-label': 'chapter' }}
                onChange= {(e)=>setState({...state, id:e.target.value }) }
                >
                    {comic.listChapters.map((item)=><option value={item.id}> {`Chương ${item.id}`}</option>)}
                </NativeSelect>
            </FormControl>
            </div> 
            <button disabled={item.id === comic.listChapters.length.toString()} 
            onClick={()=>setState({...state,id: (parseInt(item.id)+1).toString()})} 
            className={`control-btn ${item.id===comic.listChapters.length.toString()?'disabled':''}`}><i class="fas fa-arrow-circle-right"></i></button>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-row justify-content-lg-end  justify-content-center">
            <FormControlLabel
            control={<Switch onChange={handleSwitchChange} color="default" />}
            label="Chế độ Slide"
            labelPlacement="start"
            />
        </div>       

        </div>
         {
             !modeDisplay? renderDefault(item.pageList) :  renderSlide(item.pageList)
         }
        <div className="social-media d-flex flex-row justify-content-end">
            <div style={{marginTop:'10px', color:'#a4ce3a'}}>
            <Rating  
            fractions={2} 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={2.5}/>
            </div>
            <a href="#" onClick={(e)=>{e.preventDefault()}} class="social-buttons__button social-button social-button--facebook" aria-label="facebook">
                <span class="social-button__inner">
                <i class="far fa-thumbs-up"></i>
                </span>
            </a>
            <a href="#" onClick={(e)=>{e.preventDefault()}} class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                <span class="social-button__inner">
                <i class="fab fa-facebook-f"></i>
                </span>
             </a>
            <a href="#" onClick={(e)=>{e.preventDefault()}} class="social-buttons__button social-button social-button--google" aria-label="GitHub">
                <span class="social-button__inner">
                <i class="fab fa-google"></i>
                </span>
            </a>
        </div>
        <div className="list-header">Bình luận</div>
        <div className="comment-area">
            <CommentForm/>
            <CommentList comments={comments}/>
            <div className="text-center"><button className="my-btn">Xem thêm</button></div>
        </div>
        </div>

        
    </section>)
}
export default ReadingScreen;