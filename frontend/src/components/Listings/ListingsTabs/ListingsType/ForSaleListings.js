import React,{ Component } from 'react';
import DataTable from "../../ListingsTable/ListingsTable/ListingsTable";

class ForSaleListings extends Component {

  constructor(props){
    super(props);
    this.state = {
      saleListings: null
    }
  }
  
  componentDidMount(){
    this.listingsApi();
  }

  componentDidUpdate(prevProps) {
    if (this.props.postal_code !== prevProps.postal_code) {
      this.listingsApi  ();
    }
}
  listingsApi(){
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"postal_code":this.props.postal_code});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/listingsQuery", requestOptions)
        .then(res => res.json())
        .then(data => {
            this.setState({ saleListings:data})
        })
        .catch(console.log)
}

  render(){
    if(this.state.saleListings){
      return (
        <div><DataTable data={this.state.saleListings.properties} listingType="forSale"/></div>
        )
    }
    else 
      return <></>
  
  }
}

export default ForSaleListings;