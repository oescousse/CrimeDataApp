import React, { Component } from 'react';
import DataTable from "../../ListingsTable/ListingsTable/ListingsTable";

class ForRentListings extends Component {

  render(){
    return (
      <div><DataTable listingType="rental"/></div>
    )
  }
}

export default ForRentListings;