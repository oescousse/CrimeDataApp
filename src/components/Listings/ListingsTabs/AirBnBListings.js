import React, { Component } from 'react';
import { Table } from "../ListingsTable/ListingsTable";
import Styles from "../ListingsTable/ListingsTableStyles";

class AirBnBListings extends Component {

  render(){
    const data = [
      {
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        age: 28,
        status: 'Active'
      },
      {
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        age: 35,
        status: 'Active'
      },
      {
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        age: 33,
        status: 'Inactive'
      },
      {
        name: 'Patricia Lebsack',
        email: 'Julianne@kory.org',
        age: 25,
        status: 'Active'
      },
      {
        name: 'Kamren',
        email: 'Hettinger@annie.ca',
        age: 42,
        status: 'Active'
      },
      {
        name: 'Dennis Schulist',
        email: 'Dach@jasper.info',
        age: 34,
        status: 'Inactive'
      },
      {
        name: 'Kurtis Weissnat',
        email: 'Hoeger@billy.biz',
        age: 44,
        status: 'Active'
      },
      {
        name: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        age: 26,
        status: 'Active'
      },
      {
        name: 'Glenna Reichert',
        email: 'McDermott@dana.io',
        age: 30,
        status: 'Inactive'
      },                                
    ]
  
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Email',
        accessor: 'email'
      }, {
        Header: 'Age',
        accessor: 'age'
      }, {
        Header: 'Status',
        accessor: 'status'
      }
    ]
    return (
      <Styles>
        <Table data={data} columns={columns}/>
      </Styles>
    )
  }
}

export default AirBnBListings;