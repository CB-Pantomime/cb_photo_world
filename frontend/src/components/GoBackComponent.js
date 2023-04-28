
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const linkStyle = {
    // textDecoration: 'none',
    // fontFamily: 'EB Garamond',
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'bold',
    textDecorationThickness: '3px',
    textUnderlineOffset: '7px',
    textDecorationColor: 'rgb(15, 15, 15)'
}


const GoBackComponent = () => {
    return (
        <Container>
            <Link  to='/' 
             className='btn btn my-3'
             style={linkStyle}>
            <p>Go Back</p>
            </Link>
        </Container>
    );
};

export default GoBackComponent;