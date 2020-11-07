import React, { Component } from 'react';
import Crimes from '../Crimes/Crimes'
import Listings from '../Listings/Listings'
import './Results.css'

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            crimeData: null,
            letterGrade: null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.postal_code !== prevProps.postal_code) {
            this.getCrimes();
        }
    }

    getCrimes() {
        let lat = this.props.lat;
        let lng = this.props.lng;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "lat": lat, "lng": lng });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("/radiusQuery", requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.length > 0)
                    this.calculateScore(data);
                else
                    this.setState({crimeData:null})
            })
            .catch(console.log)
    }

    calculateScore(data) {

        let currentData = data
        let currentScore = 0;
        let letterGrade;
        for (let idx in currentData) {
            currentScore += parseInt(currentData[idx].CrimeRating.S)
        }


        if (currentScore < 1000) {
            letterGrade = "A"
        } else if (currentScore < 1500) {
            letterGrade = "B"
        } else if (currentScore < 2000) {
            letterGrade = "B"
        } else if (currentScore < 3000) {
            letterGrade = "C"
        } else if (currentScore < 3500) {
            letterGrade = "D"
        } else {
            letterGrade = "F"
        }

        this.setState({ crimeData: data, letterGrade: letterGrade })
    }

    createScoreElement() {
        let element;
        if (this.state.crimeData) {
            switch (this.state.letterGrade) {
                case "A":
                    element = <h2 className="good center">A</h2>
                    break;
                case "B":
                    element = <h2 className="good center">B</h2>
                    break;
                case "C":
                    element = <h2 className="ok center">C</h2>
                    break;
                case "D":
                    element = <h2 className="bad center">D</h2>
                    break;
                case "F":
                    element = <h2 className="bad center">F</h2>
                    break;
                default :
                    element = <h2 className="bad center">F</h2>
            }
        } else {
            element = <></>
        }
        
        return element;
    }

    render() {
        let scoreElement = this.createScoreElement();
        if (this.state.crimeData) {
            return (
                <div>
                    <h1 className="center">Zip Code Score</h1>
                    { scoreElement }
                    <Listings postal_code={this.props.postal_code}/>
                    <Crimes data={this.state.crimeData} />
                </div>
            )
        }
        else {
            return <></>
        }
        ;
    }
}