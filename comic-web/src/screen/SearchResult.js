import React from 'react';
import {useParams} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ComicCardList from '../components/cardLists/ComicCardList';
import {ListComics} from '../common/constant/comics';
import Pagignation from '../components/pagination/Pagination';

const SearchResult=(props)=>{
    const  { search } = useParams();
return (
    <section id="search-result">
        <Container>
            <ComicCardList title={`Kết quả tìm kiếm cho "${search}"`} listItems={ListComics}></ComicCardList>
            <div className="d-flex justify-content-center">
                <Pagignation limit={8} total={ListComics.length} ></Pagignation>
            </div>
        </Container>
    </section>
)
}
export default SearchResult;