
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';

const HelloScreen = () => {
    return (
        <> 
            <Container>
                <div className='scroll'>
                    <p>cb</p>
                    <p>b. 1982</p>
                    <p>photos 'n zines 'n books</p>
                    <p>bookseller and full-stack developer</p>
                    <p>down to use any camera</p>
                    <p>say hi</p>
                    <p>&#129463;</p>
                
                <div className='gallery'>
                    <Image
                        className="single-image"
                        src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682711628/CB%20Photo%20World%20Root/27D9080C-293D-4216-9D6D-1D40813328F7_1_105_c_bhes4y.jpg'
                        alt='cloud'
                    >
                    </Image>
                </div>
                </div>
            </Container>
            <Container className='scroll'>
                    <GoBackComponent />
            </Container>

        <Container className='main-container'>
            <p>all images and print material &copy; cb</p>
        </Container>
        </>
       
    );
};

export default HelloScreen;