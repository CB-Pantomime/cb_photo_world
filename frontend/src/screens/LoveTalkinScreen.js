
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const LoveTalkinScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682699585/CB%20Photo%20World%20Root/love%20talkin/17BF831C-4E76-4C62-A464-5D08FFB70A68_1_105_c_wlr4ab.jpg'
                alt='turd shaped clouds'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682699586/CB%20Photo%20World%20Root/love%20talkin/F3A07558-250C-48FF-83AD-F3CE58161DBC_1_105_c_hzk0wo.jpg'
                alt='graffiti of a ghost face on a wood fence and a man with no shirt laughing who has a Devo hat icon tattooed on his chest'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682699586/CB%20Photo%20World%20Root/love%20talkin/495C7727-6B53-4C21-A479-4E5833A4C7EB_1_105_c_agkkio.jpg'
                alt='a cloud set in the shape of a wishbone and a woman crouched beneath a large branch on a riverbank'
                >
                </Image>
                <Image
                className="single-image"
                src=''
                alt=''
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682699587/CB%20Photo%20World%20Root/love%20talkin/1816EF8C-C6AC-45CE-A954-B89C4E51D514_1_105_c_y9etza.jpg'
                alt='a woman standing on a large patch of tree roots with the forest behind her and two men who are posing together with no shirts on'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682699587/CB%20Photo%20World%20Root/love%20talkin/BEAB6C4F-3633-4CE7-9867-923617544896_1_105_c_wqpmuz.jpg'
                alt='a woman wearing sunglassed indoors leaning against a wall while holding a bottle of champagne'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default LoveTalkinScreen;