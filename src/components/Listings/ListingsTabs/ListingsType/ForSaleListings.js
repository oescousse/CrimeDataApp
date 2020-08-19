import React, { Component } from 'react';
import DataTable from "../../ListingsTable/ListingsTable/ListingsTable";

class ForSaleListings extends Component {

  render(){
    return (
      <div><DataTable listingType="forSale"/></div>
      )
  }
}

export default ForSaleListings;