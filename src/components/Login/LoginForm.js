import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import './LoginForm.css'

  export class LoginForm extends Component {
      constructor(props)  {
          super(props);
          this.state = {
              'email': '',
              'password': '',
              validate: {
                  emailState: '',
              },
          }
      }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.value
        const{ name } = target;
        await this.setState({
            [ name ]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
        
        // if credentials are valid
            //change state to logged in, load home page
        // else:
            //supply response that log in attempt failed
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="App">
                <h2>Log In</h2>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value={ email }
                            onChange={ (e) => this.handleChange(e)}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            value={ password }
                            onChange={ (e) => this.handleChange(e) }
                        />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
        );
    }
}

export default LoginForm;