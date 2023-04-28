
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';


const TaipeiScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700249/CB%20Photo%20World%20Root/taipei/8C241A69-901D-408C-9882-B42A1A7DD825_1_105_c_sxucuq.jpg'
                alt='graffiti of a cartoon tooth with the sea in the background'
                >
                </Image>
                {/* <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/44273984-28DE-4F6F-BBA8-FE7C05780357_1_105_c_ibev7w.jpg'
                alt='floral print sheet behind a metal gate with the words Taipei cb overlayed into the design'
                >
                </Image> */}
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700249/CB%20Photo%20World%20Root/taipei/84CCA7BF-D90D-4EF5-B286-33B18E725511_1_105_c_rzmhvt.jpg'
                alt=''
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/EFF51981-C290-4A03-87EA-E18ED592DF36_1_105_c_w5rc7x.jpg'
                alt='the entrance to an subterranean karaoke bar and a man helping a woman put on a motorcycle helmet she is smiling'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/B23690C5-25AF-4BE9-9A95-F12B65931384_1_105_c_u8rcxi.jpg'
                alt='an alleyway at night with a smiley face made of tiles and a large crooked trunk tree at night'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/52420931-FD5C-4565-8C77-51CFD7145CB3_1_105_c_e4jd6g.jpg'
                alt=''
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/992A7542-8057-48CA-961B-72BE125944CF_1_105_c_tjcsfl.jpg'
                alt='a large decal on the side of a van that says magic and a parrot with an ankle chain sitting on a pole'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700251/CB%20Photo%20World%20Root/taipei/1332F562-FAA1-44CB-A808-E4C249C8353F_1_105_c_luykhn.jpg'
                alt='graffiti of the video game character Boo and some motor scooters and a garden decoration in the shape of a tooth that is filled with white rocks'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700250/CB%20Photo%20World%20Root/taipei/C384A4F1-433D-4ADD-A7A9-C0956370088B_1_105_c_xwh1zr.jpg'
                alt='a container of mops and a man with a helmet on waiting in traffic'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682700251/CB%20Photo%20World%20Root/taipei/9549B0A9-FA47-4E34-B702-573075B95B67_1_105_c_vssigq.jpg'
                alt='motor scooters parked next to a gate that has a large print of flowers on it'
                >
                </Image>
                
            </div>
            <GoBackComponent />
        </div>
    );
};

export default TaipeiScreen;