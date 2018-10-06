import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import './injectGlobal.css';
import favicon from '../assets/img/favicon.png';

const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 700;
  color: #0d0d59;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
`;

const StyledNav = styled.nav`
  margin-left: auto;
  width: initial;
`;

const NavItem = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #0d0d59;
  margin-left: 38px;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  color: #0d0d59;
  font-weight: 500;
  font-size: 20px;

  a {
    margin-right: 71px;
  }
`;

export const AuthContext = React.createContext({
  auth: false,
  firebaseAuth: 'initial',
  toggleAuth: () => {}
});

const getLocalAuth = (name) => {
  try {
    const item = localStorage.getItem(name);
    return item !== 'true' || item !== 'false' ? false : JSON.parse(item);
  } catch (err) {
    return undefined;
  }
}

class Layout extends React.Component {
  toggleAuth = (auth, firebaseAuth) => {
    this.setState({
      auth,
      firebaseAuth
    }, () => {
      localStorage.setItem('localAuth', this.state.auth);
      localStorage.setItem('preventFlashLoad', this.state.auth);
    });
    console.log('toggleAuth');
  }
  state = {
    auth: getLocalAuth('localAuth'),
    firebaseAuth: 'initial',
    toggleAuth: this.toggleAuth
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <link rel="icon" href={favicon} />
              <script>
              {`
                const pFL = localStorage.getItem('preventFlashLoad');
                if (pFL === 'false' || pFL === 'true') {
                  if (JSON.parse(pFL) && !window.location.pathname.startsWith('/app')) { 
                    window.location.pathname = '/app' 
                  }
                } else {
                  localStorage.setItem('localAuth', false);
                  localStorage.setItem('preventFlashLoad', false);
                }
              `}
              </script>
            </Helmet>
            <NavWrapper className="container">
              <Logo to="/">Cubik</Logo>
              <StyledNav>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/blog">Blog</NavItem>
                <NavItem to="/login">Login</NavItem>
                <NavItem to="/signup">Signup</NavItem>
              </StyledNav>
            </NavWrapper>
            <div className="container">
              <AuthContext.Provider value={this.state.toggleAuth}>
                {this.props.children}
              </AuthContext.Provider>
            </div>            
            <StyledFooter className="container">
              <Link to="/about">About</Link>
              <a href="https://twitter.com/boon_suen" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </StyledFooter>
          </React.Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;