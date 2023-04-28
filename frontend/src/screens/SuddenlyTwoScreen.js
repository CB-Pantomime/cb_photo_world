
import { Image } from 'react-bootstrap';
import GoBackComponent from '../components/GoBackComponent.js';

const SuddenlyTwoScreen = () => {
    return (
        <div className="scroll">
            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645385/CB%20Photo%20World%20Root/suddenly%20two/0089D035-B1DA-42E0-B0DE-A84A23D48B1B_1_105_c_wf8ave.jpg'
                alt='a steamy bathroom mirror'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645385/CB%20Photo%20World%20Root/suddenly%20two/66F7BCE7-8835-4549-8C1C-183A7F80C64C_1_105_c_ylnmfc.jpg'
                alt='an animal carcass and spine and a woman laughing'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645386/CB%20Photo%20World%20Root/suddenly%20two/9B573111-D637-4688-A813-5C07E8CF63A7_1_105_c_uhyhuy.jpg'
                alt='a single plant leaf and clouds'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645385/CB%20Photo%20World%20Root/suddenly%20two/9B1BCC08-08D2-438A-9FEB-3F358E0D3AC7_1_105_c_gv3rti.jpg'
                alt='a river and forest from the viewpoint of a moving car and a parked car with several dozen tree shaped air fresheners hanging from the rearview mirror'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645385/CB%20Photo%20World%20Root/suddenly%20two/89A96B20-F6D0-4120-B6DE-0091A8D7E3EB_1_105_c_hbloz3.jpg'
                alt='a framed poster of a dog wearing sunglasses reflecting the American flag and the words extreme loyalty above the dog and a rainbow over a cityscape'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645385/CB%20Photo%20World%20Root/suddenly%20two/21DE663F-578F-4B7B-9A26-7BA7B76CE701_1_105_c_fjxvrl.jpg'
                alt='a forestscape and a photograph of a man hanging on a wall'
                >
                </Image>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1682645386/CB%20Photo%20World%20Root/suddenly%20two/E637F6F2-F45E-41C4-BE03-8AF998F91243_1_105_c_awiuay.jpg'
                alt='a vase of flowers split by one half shadow one half bright light'
                >
                </Image>
            </div>
            <GoBackComponent />
        </div>
    );
};

export default SuddenlyTwoScreen;