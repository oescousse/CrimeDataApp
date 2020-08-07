import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './UserInput.css';
const apiKey = '' // To get the key, look at the api key file located in our google drive


export class UserInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'zipCode': ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        // sets the state[event] to event.value
        const { target } = event;
        const value = target.value
        const { name } = target;
        this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.state.zipCode)
        fetch('https://www.zipcodeapi.com/rest/'+apiKey+'/info.json/'+this.state.zipCode+'/degrees')
            .then(response => response.json())
            .then(data => console.log(data));


    }

    render() {
        const { zipCode } = this.state;
        return (
            <Container className="UserInput">
                <h2>Search</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Zip Code:</Label>
                            <Input
                                type="number"
                                name="zipCode"
                                id="exampleNumber"
                                placeholder="00000"
                                value={zipCode}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button color="secondary" onClick={(e) => this.submitForm(e)}>Search</Button>
                </Form>
            </Container>
        );
    }
}

export default UserInput;
