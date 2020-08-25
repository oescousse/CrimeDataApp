import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Home.css'
import UserInput from '../UserInput/UserInput'

export function Home() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 alltext">How dangerous is your area?</h1>
        <br></br>
        <p className="lead alltext">We allow users to view the safety of a given home listing or rental in the
                    area of San Francisco. Simply enter the zip code of your desired area to receive a list of 
                    homes and rentals in the region</p>
        <hr className="my-2" />
        <p className="lead">
          <UserInput/>
        </p>
      </Jumbotron>
    </div>
  );
};


