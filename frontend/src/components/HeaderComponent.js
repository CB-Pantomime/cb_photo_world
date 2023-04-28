

import { Link } from 'react-router-dom';


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

const HeaderComponent = () => {
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
             to='/contact' 
             className='p-right'
             style={linkStyle}
            >
            <p>contact</p>
            </Link>
        </header>
    );
};

export default HeaderComponent;