import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container, Form } from 'reactstrap';
import classnames from 'classnames';
import ForSaleListings from "./ForSaleListings";
import RentalListings from "./RentalListings";
import "./ListingsTabs.css";

  class Tabs extends Component {
    constructor(props){
      super(props);
      this.state = {
        ActiveTab: 'ForSale',
      }
    }

    render() {
        return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.ActiveTabctiveTab === 'ForSale' })}
                onClick={() => this.setState({ ActiveTab: 'ForSale' })}
                href="#"
              >
                For Sale Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.ActiveTab === 'Rental' })}
                onClick={() => this.setState({ ActiveTab: 'Rental' })}
                href="#"
              >
                Rental Listings
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.ActiveTab}>
            <TabPane tabId="ForSale">
              <Row>
                <Col sm="6">
                  <ForSaleListings />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="Rental">
              <Row>
                <Col sm="6">
                <RentalListings />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      );
    }
  }


  export function ListingsTabs(){
     

    return (
        <Container className="App">
            <h2>Listings</h2>
            <Form className="form">
            <Col>
              <Tabs />
            </Col>
          </Form>
    </Container>
    );
}

export default ListingsTabs;