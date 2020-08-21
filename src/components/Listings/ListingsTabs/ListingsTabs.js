import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ForSaleListings from "./ListingsType/ForSaleListings";
import RentalListings from "./ListingsType/ForRentListings";
import "./ListingsTabs.css";

  class ListingsTabs extends Component {
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
                className={classnames({ active: this.state.ActiveTab === 'ForRent' })}
                onClick={() => this.setState({ ActiveTab: 'ForRent' })}
                href="#"
              >
                For Rent Listings
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.ActiveTab}>
            <TabPane tabId="ForSale">
              <Row>
                <Col >
                  <ForSaleListings />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="ForRent">
              <Row>
                <Col >
                <RentalListings />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      );
    }
  }
export default ListingsTabs;