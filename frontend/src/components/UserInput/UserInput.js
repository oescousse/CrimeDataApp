import React, { Component } from 'react';
import {
    Container, Input,
    Button, InputGroup, InputGroupAddon,Col
} from 'reactstrap';
import './UserInput.css';

export class UserInput extends Component {
constructor(props) {
        super(props);
        this.state = {postal_code: '', lat: '', lng: '', data: null };
        this.handleChange = this.handleChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    handleChange(event) { this.setState({ postal_code: event.target.value }); }

    callApi(){
        if(this.state.postal_code)
            this.postalCodeApi();
    }

    postalCodeApi() {
        let data = {postal_code:this.state.postal_code};

        fetch("/changeZip",{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(res => res.json())
            .then(data => {
                
                this.setState({ lat: data.lat, lng: data.lng, }
                    ,() => this.props.parentData(this.state))
                console.log(data);
            })
            .catch(console.log)

    }



    render() {
        
        return (
            <Container className="UserInput">
                <Col></Col>
                <Col sm={{ size: 6, offset: 3 }}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        {buttonElement}
                    </InputGroupAddon>
                    <Input type="text"
                        value={this.state.postal_code}
                        maxLength="5"
                        placeholder="Zip Code"
                        onChange={this.handleChange} />
                </InputGroup>
                </Col>
                <Col></Col>
            </Container>
        );
    }
}

export default UserInput;
