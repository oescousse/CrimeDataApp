import React from 'react';
import ReactDOM from 'react-dom';

const Body= ()=>{
    return(
        <div id="body">
            <Header/>
            <Card
                className='section'
                title='About Us'
                description='We allow users to view the safety of a given home listing or rental in the
                area of San Francisco. Simply enter the zip code of your desired area to receive a list of 
                homes and rentals in the region.'
            />
        </div>
    )
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Airbnb Crime Data
            </span>
            <br/>
            <span className="header-text">
                We allow users to check the safety of a given home listing or rental.
            </span>
        </div>
    );
}

const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

