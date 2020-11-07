import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './Home.css'
import UserInput from '../UserInput/UserInput'
import Results from '../Results/Results'

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      loading:false
    }
  }

  setLatLong(dataFromChild) {
    this.setState({
      lat: dataFromChild.lat,
      lng: dataFromChild.lng,
      postal_code: dataFromChild.postal_code
    });
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3 alltext">How dangerous is a zip code?</h1>
          <br></br>
          <p className="lead alltext">We allow users to view the safety of a given zip code in the
          area of San Francisco. This is benificial if you are looking 
          to rent or buy and you want to ensure that the are you are looking in is safe.
          Simply enter the zip code of your desired area to receive a list of
                    homes and rentals in the region</p>
          <h4 className="alltext">NOTE: This website is purely for practice purposes and should not be used
            in any real world scenario
          </h4>
          <hr className="my-2" />
          <UserInput parentData={this.setLatLong.bind(this)}/>
        </Jumbotron>
        <Results lat={this.state.lat} lng={this.state.lng} postal_code={this.state.postal_code}
        />
      </div>
    );
  }
};


