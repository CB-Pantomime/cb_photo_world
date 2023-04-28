
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const TCScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702384/CB%20Photo%20World%20Root/tc/5F84DFA0-8FE1-4969-92E9-9C0F96E880EE_1_105_c_zfjq07.jpg'
                alt='a floral print pattern'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702384/CB%20Photo%20World%20Root/tc/CF20CC25-D84C-4E02-8EA7-A15F38182D78_1_105_c_mjsch5.jpg'
                alt='a sheet of paper that reads TC and a man posing behind hundreds of flowers'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702384/CB%20Photo%20World%20Root/tc/4B548A59-C78F-4CD3-A6F6-257BD4AE8437_1_105_c_ql2gwz.jpg'
                alt='hundreds of white and yellow flowers'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702384/CB%20Photo%20World%20Root/tc/AB9842DC-7D6D-4C5A-A269-94F2C0023853_1_105_c_f2sm8u.jpg'
                alt='a mans knee cap that has a rose tattoo on it and a vase of flowers with many pedals fallen off of it'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702384/CB%20Photo%20World%20Root/tc/F1F7E172-16DB-4EA1-AB5A-EF6C908855C3_1_105_c_ysnqq1.jpg'
                alt='yellow flowers in a field and a man smelling white roses'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default TCScreen;