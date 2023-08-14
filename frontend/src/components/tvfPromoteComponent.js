

import React from 'react';
import { Container } from 'react-bootstrap'; 

const linkStyle = {
    // textDecoration: 'none',
    // fontFamily: 'EB Garamond',
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'bold',
    textDecorationThickness: '3px',
    textUnderlineOffset: '4px',
    textDecorationColor: 'rgb(214, 109, 167)'
}

const TVFPromoteComponent = () => {
    return (
        <Container className='TVFPromoteComponent-container'>
           <h1 className='h1-callToAction-televisionFlowersApp'>
            view the television flowers web application <a href='http://www.televisionflowers.com' target='_blank' style={linkStyle}>
                  here
              </a>
           </h1>
           {/* <p>test</p> */}
        </Container>
    );
};

export default TVFPromoteComponent;