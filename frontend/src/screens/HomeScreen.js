

import '../App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const linkStyle = {
    // textDecoration: 'none',
    // fontFamily: 'EB Garamond',
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'bold',
    textDecorationThickness: '4px',
    textUnderlineOffset: '7px',
    textDecorationColor: 'rgb(201, 191, 217)'
}

const HomeScreen = () => {
    return (
        <>
        
        <main>
            
        <Container className='main-container'>
            <Link
             to='/if-it-really-is-me' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>if it really is me</h3>
            </Link>

            <Link
             to='/slim-night-fantasy-exit' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>slim night / fantasy exit</h3>
            </Link>

            <Link
             to='/suddenly-two' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>suddenly two</h3>
            </Link>

            <Link
             to='/licorice' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>licorice</h3>
            </Link>

            <Link
             to='/rhubarb' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>rhubarb</h3>
            </Link>

            <Link
             to='/television-flowers-spring-zine' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>television flowers (spring zine)</h3>
            </Link>

            <Link
             to='/kite-again' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>kite, again ^HK^</h3>
            </Link>

            <Link
             to='/beacon-hill' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>beacon hill</h3>
            </Link>

            <Link
             to='/i-did-it-perfectly' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>i did it perfectly</h3>
            </Link>

            <Link
             to='/lotus-bauhinia' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>lotus, bauhinia</h3>
            </Link>

            <Link
             to='/love-talkin' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>love talkin'</h3>
            </Link>

            <Link
             to='/taipei' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>taipei</h3>
            </Link>

            <Link
             to='/tc' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>TC</h3>
            </Link>

            <Link
             to='/television-flowers' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>television flowers ('16 - '18 )</h3>
            </Link>

            <Link
             to='/warp-stay' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>warp, stay</h3>
            </Link>

            <Link
             to='/spokane-2' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>spokane 2</h3>
            </Link>

            <Link
             to='/consonant-blends' 
             className='btn btn my-3'
             style={linkStyle}
            >
            <h3>consonant blends</h3>
            </Link>
        </Container>
        </main>
      
        </>
    );
};

export default HomeScreen;