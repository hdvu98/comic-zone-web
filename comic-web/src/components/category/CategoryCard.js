import React from 'react';

export default class CategoryCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isStart: false
        }
    }

    render(){
        const {thumbnail, category} = this.props;
        return (
            <div className="category-card">
                <img className="img-fluid thumbnail" src={thumbnail} alt=""></img>
                <div className="overlay"></div>
                <div className="card-content d-flex flex-column align-items-center justify-content-center">
                    <div className="card-title">{category}</div>
                </div>
            </div>
        );
    }

}