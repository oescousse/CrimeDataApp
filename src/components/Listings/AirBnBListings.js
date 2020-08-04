import React, { Component } from 'react';
import ListingsTable from "./ListingsTable";


  export class AirBnBListings extends Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
        <div>
            <ListingsTable />
        </div>
      );
    }
  }

export default AirBnBListings;