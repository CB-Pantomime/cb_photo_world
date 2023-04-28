
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';

const BeaconHillScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/1F04296B-2D42-422B-827B-3278AFECB172_1_105_c_p7ogg1.jpg'
                alt='cover of book reads beacon hill with tree in background'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/FC95F9B4-F2F1-4E8B-9EDB-6E0EEFC410AA_1_105_c_fdnq1n.jpg'
                alt='suburban yard with lots of overgrown foliage'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/8F728CB7-FBC2-4C46-9014-366646463265_1_105_c_mm7yxh.jpg'
                alt='a dirt road alleyway with overgrown foliage'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/56E01C4C-5963-4C73-8823-79D0347A95E5_1_105_c_vtbdnd.jpg'
                alt='flower petals on a shrub'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/87E26B9F-3A1F-4A1C-80B9-CA9E78A027E0_1_105_c_jh7bbg.jpg'
                alt='over grown trees and shrubs creating a small tunnel around a sidewalk'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682697757/CB%20Photo%20World%20Root/beacon%20hill/120EE0A7-75C2-4415-9B08-92AF46D1742F_1_105_c_ynerzs.jpg'
                alt='page from a book with quote by James Tate that reads the world wobbled off its axis and a foul wind blew'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default BeaconHillScreen;