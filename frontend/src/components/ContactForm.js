
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container } from 'react-bootstrap';
import GoBackComponent from './GoBackComponent.js';

function ContactForm() {

    const [state, handleSubmit] = useForm("xdovbnlv");
    if (state.succeeded) {
        return <Container>
            <p>Thank you for your inquiry &#x1F41A; </p>
        </Container>
        
    }


 return (
    <div class='form-container'>
    <form onSubmit={handleSubmit}>


      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />


      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />


      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
 )
}

export default ContactForm;