import React, { Component } from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';
import CrimeTable from './CrimeTable/CrimeTable';
import './Crimes.css'
export class Crimes extends Component {

    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    render(){
            return (
                <div>
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        View Crimes
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <CrimeTable crimedata= {this.props.data}/>
                    </UncontrolledCollapse>
                </div>
            );
       
    
    }
}
export default Crimes;