import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AirBnBListings from "./AirBnBListings";
import RentalListings from "./RentalListings";

  export class ListingsTabs extends Component {
    constructor(props){
      super(props);
      this.state = {
        ActiveTab: 'AirBnB',
      }
    }

    render() {
        return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.ActiveTabctiveTab === 'AirBnB' })}
                onClick={() => this.setState({ ActiveTab: 'AirBnB' })}
                href="#"
              >
                AirBnB Listings
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
            <TabPane tabId="AirBnB">
              <Row>
                <Col sm="6">
                  <AirBnBListings />
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

export default ListingsTabs;