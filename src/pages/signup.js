import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import auth from '../firebase/auth';
import Layout, { AuthContext } from '../components/Layout';
import {
  StyledLogin,
  LoginHeading,
  LoginSubheading,
  AuthFormGroup,
  AuthFormLabel,
  AuthFormInput,
  AuthFormButton
} from './login';

const SignupButton = styled(AuthFormButton)`
  width: 165px;
`;

export default class SignupPage extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleSignup = (e, toggleAuth) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      toggleAuth(true, 'done');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Signup error', errorCode, errorMessage);
    });
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}));
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <StyledLogin>
          <LoginHeading> Sign Up
            <LoginSubheading>
              Create an account and start collecting links today.
            </LoginSubheading>
          </LoginHeading>
          <AuthContext.Consumer>
            {(toggleAuth) => (
              <form 
                onSubmit={(e) => { 
                  this.handleSignup(e, toggleAuth);
                }}
              >
                <AuthFormGroup>
                  <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
                  <AuthFormInput
                    type="email" placeholder="you@example.com" 
                    spellCheck="false" onChange={this.onEmailChange}
                    id="email"
                  />
                </AuthFormGroup>
                <AuthFormGroup>
                  <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
                  <AuthFormInput 
                    type="password" placeholder="Enter your password" 
                    spellCheck="false" onChange={this.onPasswordChange}
                    id="password"
                  />
                </AuthFormGroup>
                <div>
                  <SignupButton type="submit">Create Account</SignupButton>
                </div>
              </form>
            )}
          </AuthContext.Consumer>
        </StyledLogin>
      </Layout>
    );
  }
}
