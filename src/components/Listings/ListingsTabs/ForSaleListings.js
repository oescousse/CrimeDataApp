import React, { Component } from 'react';
import { Table } from "../ListingsTable/ListingsTable";
import Styles from "../ListingsTable/ListingsTableStyles";

class ForSaleListings extends Component {

  render(){
    const data = [
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      },
      {
        address: '417 E 57th St, New York',
        neighborhood: 'Sutton Place',
        rating: "####",
        link: <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>
      }
    ]
  
    const columns = [
      {
        Header: 'Address',
        accessor: 'address'
      }, {
        Header: 'Neighborhood',
        accessor: 'neighborhood'
      }, {
        Header: 'Crime Rating',
        accessor: 'rating'
      }, {
        Header: 'External Link',
        accessor: 'link'
      }
    ]
    return (
      <Styles>
        <Table data={data} columns={columns}/>
      </Styles>
    )
  }
}

export default ForSaleListings;