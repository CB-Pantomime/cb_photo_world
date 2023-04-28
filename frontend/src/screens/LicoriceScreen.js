
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const LicoriceScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645952/CB%20Photo%20World%20Root/licorice/09D9AB1B-691F-4243-9EF3-BC4C166BC808_1_105_c_uro21z.jpg'
                alt='the horizon at dusk'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645953/CB%20Photo%20World%20Root/licorice/590F1A0F-5B51-468C-A85C-B16497F6F518_1_105_c_bb5vey.jpg'
                alt='graffiti of a smiling ghost and a dog relaxing'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645953/CB%20Photo%20World%20Root/licorice/54B9F760-1F97-4442-A4AB-7136C016D872_1_105_c_iubi6p.jpg'
                alt='a mannequin of the inside of a human and a man at night with a blank look on his face'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645953/CB%20Photo%20World%20Root/licorice/2E48C547-78F5-43E1-B749-7FCDAF2DD419_1_105_c_ienvf8.jpg'
                alt='cherry blossom tree at night and a vanity license plate that reads over 21'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645954/CB%20Photo%20World%20Root/licorice/136EA2D8-AB2E-4ACE-9F83-2B912A63863C_1_105_c_p2vmbd.jpg'
                alt='the sun and a cloud and two dogs climbing on each other'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645953/CB%20Photo%20World%20Root/licorice/C0DB9CC1-F2B6-42CF-80DD-557B71F98A5A_1_105_c_w7jxmf.jpg'
                alt='a young person using a party horn'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default LicoriceScreen;