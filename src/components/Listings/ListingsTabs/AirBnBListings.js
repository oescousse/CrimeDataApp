import React, { Component } from 'react';
import { ListingsTable } from "../ListingsTable/ListingsTable";
import Styles from "../ListingsTable/ListingsTableStyles";

class AirBnBListings extends Component {

  render(){
    return (
      <Styles>
        <ListingsTable />
      </Styles>
    )
  }
}

export default AirBnBListings;