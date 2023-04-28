

import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const linkStyle = {
    // textDecoration: 'none',
    // fontFamily: 'EB Garamond',
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'bold',
    textDecorationThickness: '2px',
    textUnderlineOffset: '8px',
    textDecorationColor: 'rgb(124, 121, 125)'
}

const HeaderMainOnlyComponent = () => {
    return (
        <header>
            <Link
             to='/hello' 
             className='p-left'
             style={linkStyle}
            >
            <p>hello</p>
            </Link>

            <Link
             to='/' 
             className='p-right'
             style={linkStyle}
                >
               <p>main</p>
            </Link>
            
            <Link
             to='/contact' 
             className='p-right'
             style={linkStyle}
            >
            <p>contact</p>
            </Link>
        </header>
    );
};

export default HeaderMainOnlyComponent;