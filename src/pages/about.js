import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';

import avatar from '../assets/img/avatar.png';
import ethereum from '../assets/img/ethereum.png';

const Header = styled.div`
  
  p {
    color: #102d3e;
    font-size: 25px;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bio = styled.div`
  width: 220px;
  height: 170px;
  background: #fffafa;
  border: 1px solid #ffd1d1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`;

const BioImg = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  box-shadow: 0 1px 7px #ecedff;
`;

const WhyBox = styled.div`
  box-sizing: border-box;
  width: 670px;
  box-shadow: 1px 1px 8px rgba(171, 133, 255, .5);
  padding: 42px;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  justify-content: center;
`;

const AboutBoxTitle = styled.h2`
  color: #5554b9;
  font-size: 30px;
  margin: 10px 0 10px 0;
`;

const AboutBoxParagraph = styled.p`
  color: #2b2b77;
  font-size: 18px;
`;

const SecondRow = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HowBox = styled.div`
  box-sizing: border-box;
  width: 548px;
  box-shadow: 1px 1px 8px rgba(171, 133, 255, .5);
  padding: 42px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    margin-top: 10px;
    width: 198px;
    height: 55px;
    background: #939aff;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    font-size: 16px;
    box-sizing: border-box;
    padding-top: 19px;
  }
`;

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About Cubik</title>
    </Helmet>
    <Header>    
      <h1>About</h1>
      <p>Hey there, this is Boonsuen, I build and design Cubik.</p>
    </Header>  
    <FirstRow>
      <Bio>
        <BioImg src={avatar} />
      </Bio>
      <WhyBox>
        <AboutBoxTitle>Why I built it.</AboutBoxTitle>
        <AboutBoxParagraph>
          I always wanted to build 'something', since the very early day I
          started learning to code and craft websites. By then, I had several 
          ideas in mind but I didn't really execute on them or simply postspone 
          them, mainly due to lack of required knowledge and skills.
        </AboutBoxParagraph>
        <AboutBoxParagraph>
          Cubik is a right mix of both, in my opinion. It's neither too complex,
          nor too simple. It's out of the reach of my domain of expertise. 
        </AboutBoxParagraph>
        <AboutBoxParagraph>
          Also, Cubik serves well as a project that let me practice my coding 
          skill. Side projects are always the best way to let us developers
          learn new stuff while actually building something useful.
        </AboutBoxParagraph>
      </WhyBox>
    </FirstRow>
    <SecondRow>
      <HowBox>
        <AboutBoxTitle>How I built it.</AboutBoxTitle>
        <AboutBoxParagraph>
          I wrote an blog post about some interesting technical 
          challenges and process I've gone through when 
          developing the webapp. 
        </AboutBoxParagraph>
        <a href="/404">Read it on Medium</a>
      </HowBox>
      <img src={ethereum} style={{
        width: 300,
        margin: 'auto'
      }} alt="ethereum" />
    </SecondRow>
  </Layout>
);

export default AboutPage;