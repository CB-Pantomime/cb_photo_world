
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';

const Spokane2Screen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705383/CB%20Photo%20World%20Root/spokane%202/B18380B6-87A4-4889-9143-6EDF22A720E7_1_105_c_cr6vys.jpg'
                alt='flower petals'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705384/CB%20Photo%20World%20Root/spokane%202/9836FD38-C948-443B-AE92-1021EBA1D973_1_105_c_xu4v4m.jpg'
                alt='a person posing in front of cheetah print fabric and a very tall tree'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705383/CB%20Photo%20World%20Root/spokane%202/588A7B1F-D2C1-4227-ABBB-197462AEF432_1_105_c_hmzlwy.jpg'
                alt='someone wearing a wolf mask and large rocks with water crashing around them in a river'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705383/CB%20Photo%20World%20Root/spokane%202/EE3869C6-7FB3-47E1-9B62-D70DD8F4DA04_1_105_c_tc6hdf.jpg'
                alt='tire tracks in snow and a life-like velociraptor wearing a headset and typing a computer'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705383/CB%20Photo%20World%20Root/spokane%202/236966B2-C1AF-4E7F-A82A-5DF4CC136DE5_1_105_c_uhl2lr.jpg'
                alt='a woman making claw shapes with her hands and smiling and a the moon in the sky with a tree below it'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705383/CB%20Photo%20World%20Root/spokane%202/F3AA3C91-C756-4823-99E6-479205560BE7_1_105_c_jutalv.jpg'
                alt='a snow covered storefront with a large decal of a tropical island'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default Spokane2Screen;