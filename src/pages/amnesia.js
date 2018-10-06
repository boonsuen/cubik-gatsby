import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import auth from '../firebase/auth';
import Layout from '../components/Layout';
import {
  AuthFormGroup,
  AuthFormLabel,
  AuthFormInput,
  AuthFormButton
} from './login';

const ResetPasswordButton = styled(AuthFormButton)`
  width: 155px;
`;

export default class AmnesiaPage extends React.Component {
  state = {
    email: ''
  }
  handleSendResetEmail = () => {
    auth.sendPasswordResetEmail(this.state.email).then(function() {
      console.log('email sent');
    }).catch(function(error) {
      console.log(error, 'error happened');
    });
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({email});
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Forgot Password</title>
        </Helmet>
        <div style={{marginTop: '80px'}}>
          <h1>Reset your password</h1>
          <p>To reset your password, enter the email address you use to sign in.</p>
          <form   
            onSubmit={(e) => { 
              e.preventDefault();
              this.handleSendResetEmail();
            }}
          >
            <AuthFormGroup>
              <AuthFormLabel>Email</AuthFormLabel>
              <AuthFormInput 
                type="email" placeholder="Enter your account's email" 
                spellCheck="false" onChange={this.onEmailChange}
              />
            </AuthFormGroup>
            <ResetPasswordButton type="submit">Get Reset Link</ResetPasswordButton>
          </form>          
        </div>
      </Layout>
    );
  }
};
