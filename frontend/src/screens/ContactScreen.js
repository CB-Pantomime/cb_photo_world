
import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm.js';
import GoBackComponent from '../components/GoBackComponent.js';

const ContactScreen = () => {
    return (
        <>
         <div className='scroll'>
             <ContactForm />
                <Container className='scroll'>
                        <GoBackComponent />
                </Container>
             </div>
        </>
       
    );
       
       
};

export default ContactScreen;