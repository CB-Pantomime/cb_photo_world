
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const LotusBauhiniaScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698922/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/6AB5943A-6BD9-4E55-88A3-E6F17DA04E21_1_105_c_veoacj.jpg'
                alt='wide leaves with tall grass drooping over them'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698922/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/313735AC-FEE1-435F-B192-797C66737B37_1_105_c_g4ekje.jpg'
                alt='a winding path in the subtropics and a young person holding a balloon'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698923/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/81B0F321-16C6-43F8-9AF7-ADB4EEF3749E_1_105_c_fzrhfi.jpg'
                alt='a car with flame stickers on it and a crowded three storey escalator'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698922/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/3405F4EB-90DC-4B54-A641-A308817ECB7E_1_105_c_xlrt0o.jpg'
                alt='four large industrial style fans and a monkey walking down a path in the subtropical jungle'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698923/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/DEE04517-EDE7-4E03-BA7F-E5384D8DC58C_1_105_c_ifwyny.jpg'
                alt='several eight storey buildings and a large tree root coming up from the sidewalk'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698922/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/22F37AC7-5258-4FDD-9A30-BC6BD9E9847D_1_105_c_e5p5w9.jpg'
                alt='a view of the thousand islands area in Hong Kong and a realistic looking life sized plastic german shepherd'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698923/CB%20Photo%20World%20Root/lotus%2C%20bauhinia/3F848346-3C75-4368-A3F8-B1D7C3C49E2D_1_105_c_anzkuc.jpg'
                alt='graffiti of a cartoon dog and many other markings and stains on the wall'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default LotusBauhiniaScreen;