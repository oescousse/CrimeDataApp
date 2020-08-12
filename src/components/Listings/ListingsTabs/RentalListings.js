import React, { Component } from 'react';
import { ListingsTable } from "../ListingsTable/ListingsTable";
import Styles from "../ListingsTable/ListingsTableStyles";

class RentalListings extends Component {

  render(){
    return (
      <Styles>
        <ListingsTable />
      </Styles>
    )
  }
}

export default RentalListings;