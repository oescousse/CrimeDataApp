import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './Home.css'
import UserInput from '../UserInput/UserInput'
import Crimes from '../Crimes/Crimes'

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null
    }
  }
  getData(dataFromChild) {
    this.setState({
      lat: dataFromChild.lat,
      long: dataFromChild.lng
    }, () => {
      this.getCrimes();
    });
  }

  getCrimes() {

    let lat = this.state.lat;
    let long = this.state.long;
    var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({"lat":lat,"long":long});
          var requestOptions = {
              method: 'POST',
              headers:myHeaders,
              body: raw,
              };

          fetch("/radiusQuery", requestOptions)
          .then(res => res.json())
              .then(data => {
                this.calculateScore(data);
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

    this.setState({ crimeData: data, letterGrade: letterGrade }, () => {
      console.log(this.state)
    })
  }


  render() {

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3 alltext">How dangerous is your area?</h1>
          <br></br>
          <p className="lead alltext">We allow users to view the safety of a given home listing or rental in the
          area of San Francisco. Simply enter the zip code of your desired area to receive a list of
                    homes and rentals in the region</p>
          <hr className="my-2" />

          <UserInput parentData={this.getData.bind(this)} />
        </Jumbotron>
        <Crimes data={this.state.crimeData} letterGrade={this.state.letterGrade} />
      </div>
    );
  }
};


