import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback,
  } from 'reactstrap';
import './RegisterForm.css'

  export class RegisterForm extends Component {
      constructor(props)  {
          super(props);
          this.state = {
              'email': '',
              'password': '',
              'VerifyPassword': '',
              validate: {
                  emailState: '',
                  VerifyPasswordState: '',
              },
          }
          this.handleChange = this.handleChange.bind(this);
      }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    validateVerifyPassword(e) {
        const { validate, password } = this.state
        if (password === e.target.value) {
            validate.VerifyPasswordState = 'has-success'
        } else {
            validate.VerifyPasswordState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange(event) {
        const { target } = event;
        const value = target.value
        const { name } = target;
        this.setState({
            [ name ]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
        // if email is in proper form:
            // if email already in database
                // do not store info
            // elif passwords match
                // store email/password correctly
            //else
                // show message that passwords dont match
        // else 
            //do nothing, a message stating the email is in the wrong form should already be showing
    }

    render() {
        const { email, password, VerifyPassword } = this.state;
        return (
            <Container className="App">
                <h2>Register</h2>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value={ email }
                            valid={ this.state.validate.emailState === 'has-success' }
                            invalid={ this.state.validate.emailState === 'has-danger' }
                            onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                                }
                            }
                        />
                        <FormFeedback valid>
                            Your email looks good.
                        </FormFeedback>
                        <FormFeedback>
                            Looks like there's something wrong with your email.
                        </FormFeedback>
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
                            onChange={ (e) => this.handleChange(e)}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Re-enter Password</Label>
                        <Input
                            type="password"
                            name="VerifyPassword"
                            id="exampleVerifyPassword"
                            placeholder="********"
                            value={ VerifyPassword }
                            valid={ this.state.validate.VerifyPasswordState === 'has-success' }
                            invalid={ this.state.validate.VerifyPasswordState === 'has-danger' }
                            onChange={ (e) => {
                                this.validateVerifyPassword(e)
                                this.handleChange(e)
                                }
                            }
                        />
                    </FormGroup>
                    <FormFeedback valid>
                        Your passwords match.
                    </FormFeedback>
                    <FormFeedback>
                        Looks like your passwords don't match.
                    </FormFeedback>
                </Col>
                <Button onClick={ (e) => this.submitForm(e)}>Submit</Button>
            </Form>
        </Container>
        );
    }
}

export default RegisterForm;