import React, { Component } from 'react';
import DataTable from "../ListingsTable/ListingsTable";
// import Styles from "../ListingsTable/ListingsTableStyles";

class RentalListings extends Component {

  render(){
    return (
      <div><DataTable listingType="rental"/></div>
    )
  }
}

export default RentalListings;