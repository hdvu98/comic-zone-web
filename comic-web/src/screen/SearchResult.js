import React from 'react';
import {useParams} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ComicCardList from '../components/cardLists/ComicCardList';
import {ListComics} from '../common/constant/comics';
import Pagignation from '../components/pagination/Pagination';

const SearchResult=(props)=>{
    const  { search } = useParams();
    const results = ListComics.filter(element=>element.comicName.includes(search))
return (
    <section id="search-result">
        <Container>
            <ComicCardList title={`Kết quả tìm kiếm cho "${search}"`} listItems={results}></ComicCardList>
            <div className="d-flex justify-content-center">
                <Pagignation limit={8} total={results.length} ></Pagignation>
            </div>
        </Container>
    </section>
)
}
export default SearchResult;