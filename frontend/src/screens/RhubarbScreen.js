
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const RhubarbScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649601/CB%20Photo%20World%20Root/rhubarb/8DE2AB51-DB66-46B5-A09F-9A74C6028C3F_1_105_c_p8tyf8.jpg'
                alt='an old truck from the viewpoint through a chainlink fence'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649601/CB%20Photo%20World%20Root/rhubarb/DE3DC2EB-40FE-44CF-8F44-27D375E0D067_1_105_c_ptrfan.jpg'
                alt='a woman walking down a street holding an infant and the reflection of the sun in a river'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649602/CB%20Photo%20World%20Root/rhubarb/BF60EAAD-2D4D-408B-AE99-87B3CE471019_1_105_c_eyorcy.jpg'
                alt='some trees and a man walking down the street'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649601/CB%20Photo%20World%20Root/rhubarb/1D7BFA23-4F22-409F-9FAD-CB2BFD7D4E61_1_105_c_hvaimj.jpg'
                alt='a dog and some graffiti of a skull'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649601/CB%20Photo%20World%20Root/rhubarb/57CE1B04-C861-47C6-BB28-D738794DE8AF_1_105_c_nbs24h.jpg'
                alt='a young person on some grass and a large swatch of ivy covering a fence'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649603/CB%20Photo%20World%20Root/rhubarb/313F71E0-CDFC-4793-98DD-8B7AEB3B588C_1_105_c_et0hdc.jpg'
                alt='a woman sitting on the stoop of a house and some pine trees'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682649601/CB%20Photo%20World%20Root/rhubarb/77D2653F-2104-451C-8500-AC657AF487C8_1_105_c_iclcwa.jpg'
                alt='a small cloud in the background floating over a two storey apartment building'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default RhubarbScreen;