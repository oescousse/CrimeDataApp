import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


  export class ListingsTabs extends Component {
    constructor(props){
      super(props);
      this.state = {
        ActiveTab: '1',
      }
    }

    render() {
        return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.ActiveTabctiveTab === '1' })}
                onClick={() => this.setState({ ActiveTab: '1' })}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.ActiveTab === '2' })}
                onClick={() => this.setState({ ActiveTab: '2' })}
              >
                Tab 2
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.ActiveTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="6">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      );
    }
  }

export default ListingsTabs;