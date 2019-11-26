import React from 'react';
import  Countdown from 'react-countdown-now';

export default class CountDownCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isStart: false
        }
    }

    render(){
        const {thumbnail, title, publicTime} = this.props;
        return (
            <div className="my-card">
                <img className="img-fluid" src={thumbnail} alt=""></img>
                <div className="overlay"></div>
                <div className="card-content">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="card-title">{title}</div>
                    <div className="countdown">
                        <Countdown date={Date.now() + 1000000}></Countdown>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }

}