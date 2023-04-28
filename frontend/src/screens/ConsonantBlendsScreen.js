
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';

const ConsonantBlendsScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
            <Container>
                    <p>3 mega pixel bliss</p>
                </Container>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/8F583FD1-FFB9-4770-B19B-CC95B0F03FCD_1_105_c_uyswx9.jpg'
                alt='macro viewpoint of a purple and yellow flower'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/B94B1434-E2C8-48E1-94AC-ED0ACFF5D897_1_105_c_rsoakk.jpg'
                alt='flowering shrub surround by light and shadow and a cityscpe surrounded by tree branches'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682706172/CB%20Photo%20World%20Root/consonant%20blends/02D12935-B405-4FE9-A959-54BB5D10E4C0_1_105_c_jj1dqb.jpg'
                alt='macro viewpoint of a mannequin eyeball and light and shadow coming through venetian blinds'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/6D082F8F-7D68-4C69-8261-9ADAE45D3684_1_105_c_i0qufk.jpg'
                alt='macro viewpoint of a grasshopper and two contruction workers smiling walking down the street'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/7E750667-CD25-434E-B1F2-A319D58D1911_1_105_c_fdp51y.jpg'
                alt='shadow of a human on a wall and a shiba inu dog sitting in a car that has shiba inu printed headrests on the seats'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/E0087D1B-CF3B-4B80-B071-C3479327EE30_1_105_c_fai8f4.jpg'
                alt='macro viewpoint of a rose and macro viewoint of a baby pidgeon'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682705724/CB%20Photo%20World%20Root/consonant%20blends/7C9F94F6-FD25-471F-AF59-F4EDA235170D_1_105_c_nekxjr.jpg'
                alt='a long fluorescent light tube'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default ConsonantBlendsScreen;