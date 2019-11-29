import React from 'react';
import {Container} from 'reactstrap';
import Carousel from '../components/carousel/Carousel';
import CountdownList from '../components/CountDownList/CountDownList';
import {countDownList} from '../common/constant/countDownList'; 
import List from '../components/cardLists/List';
import {trending} from '../common/constant/topTrending';
import {categories} from '../common/constant/categories';
import CategoryList from '../components/category/ListCategory';
import Ranking from '../components/ranking/Rankings';
import {ranking} from '../common/constant/ranking';

function Home(){
    return (
        <section id="home">
            <Carousel/>
            <Container>
                <CountdownList title="SẮP PHÁT PHÁT HÀNH" listItems={countDownList} />
                <Ranking list={ranking}></Ranking>
                <List title="MỚI CẬP NHẬT" listItems={trending}></List>
                <CategoryList title="Thể loại" listItems={categories}></CategoryList>
            </Container>
        </section>
    );
}
export default Home;