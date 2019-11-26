import React from 'react';
import {Container} from 'reactstrap';
import Carousel from '../components/carousel/Carousel';
import CountdownList from '../components/CountDownList/CountDownList';
import {countDownList} from '../common/constant/countDownList'; 
import List from '../components/cardLists/List';
import {trending} from '../common/constant/topTrending';
function Home(){
    return (
        <section id="home">
            <Carousel/>
            <Container>
                <CountdownList title="SẮP PHÁT PHÁT HÀNH" listItems={countDownList} />
                <List title="MỚI CẬP NHẬT" listItems={trending}></List>
            </Container>
        </section>
    );
}
export default Home;