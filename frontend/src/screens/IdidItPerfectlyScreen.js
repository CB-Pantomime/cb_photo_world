
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const IdidItPerfectlyScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698360/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/8172409A-B48F-4997-AF1A-AFA171D15BA4_1_105_c_yti0xd.jpg'
                alt='white cap wave off a big river'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698359/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/63D11FAE-3DEC-4B8B-9A76-CB24292FFB48_1_105_c_spvs0m.jpg'
                alt='young people running and a flower wet from rain'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698359/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/D48BA7ED-641E-4CD8-B9AF-29A1119B44E3_1_105_c_w99kgu.jpg'
                alt='A man wearing a large hat posing behind some flowers on a grassy knoll and a lake reflecting the image of the mountains from the background'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698359/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/73B93AF7-B4F9-4BA9-82C1-728768A00396_1_105_c_auhruh.jpg'
                alt='graffiti of a cartoon guy with mohwak wagging his tongue and a dog at night wagging his tongue'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698359/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/07B02D0B-4528-496F-A6F3-C6F3772438AE_1_105_c_uzqlmr.jpg'
                alt='A lady outside leaning on a chair with one knee and some flowering shrubs'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682698361/CB%20Photo%20World%20Root/i%20did%20it%20perfectly/1E992A73-D1B9-4D99-895B-C29C862EEAE9_1_105_c_okub8p.jpg'
                alt='a river and forest area'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default IdidItPerfectlyScreen;