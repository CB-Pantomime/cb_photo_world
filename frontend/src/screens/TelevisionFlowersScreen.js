
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';
import { Container } from 'react-bootstrap';
import TVFPromoteComponent from '../components/TVFPromoteComponent.js';

const TelevisionFlowersScreen = () => {
    return (
        <div className="scroll">
            <TVFPromoteComponent />
            <div className='gallery'>
                {/* <Container>
                    <p>"I always notice flowers" -Andy Warhol</p>
                </Container> */}
                

                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682703702/CB%20Photo%20World%20Root/television%20flowers/1CBEF0F3-5188-46FE-A95B-4F49994533B2_1_105_c_xdoy07.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702628/CB%20Photo%20World%20Root/television%20flowers/1E75DC09-451E-4D58-84D4-C81372AA7051_1_105_c_m49fqi.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702628/CB%20Photo%20World%20Root/television%20flowers/5355033D-7072-466F-91DB-65D31E4B7AC4_1_105_c_jfodtk.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702629/CB%20Photo%20World%20Root/television%20flowers/F23C71A8-B7FA-419D-9BC7-9DB2CDD3E8CE_1_105_c_t9pw0u.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702629/CB%20Photo%20World%20Root/television%20flowers/1BCB0DDB-9177-48E3-BC4B-37CBB61628EC_1_105_c_wxou0u.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702629/CB%20Photo%20World%20Root/television%20flowers/86ADC97A-38C8-4737-9129-2BE16DFC92D2_1_105_c_c9oond.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702629/CB%20Photo%20World%20Root/television%20flowers/FEC6F067-D9F0-4DF1-84A1-1F230648DBB0_1_105_c_s5esh8.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702629/CB%20Photo%20World%20Root/television%20flowers/72E90897-04B4-4443-9C8B-295C3C94071D_1_105_c_ziiwm1.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702630/CB%20Photo%20World%20Root/television%20flowers/B361442B-3C01-46AB-B729-A795C538E2D1_1_105_c_gl3oet.jpg'
                alt='flowers on television'
                >
                </Image>
                <Container>
                    <p>5" x 7", eight page supplement w/ series of poems by Jamey Marie Braden: </p>
                </Container>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702630/CB%20Photo%20World%20Root/television%20flowers/EEF1E578-EB22-408F-A016-1E41872004EB_1_105_c_hvtjvn.jpg'
                alt='flowers on television'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682702630/CB%20Photo%20World%20Root/television%20flowers/6E3514B2-C50A-40BD-8F17-82A7656C88EC_1_105_c_aopa1q.jpg'
                alt='flowers on television'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default TelevisionFlowersScreen;