
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Row, Col, Container, Image} from 'react-bootstrap';

const ImageComponent = () => {

    // const [cloudindaryData, setCloudindaryData] = useState([]);

    useEffect( () => {
        // const getImageIds = async () => {
        //     try{
        //         const { data } = await axios.get('/api/v1/images');
        //         console.log(data)
        //         setCloudindaryData(data)
        //     } catch (error) {
        //         console.log(error)
        //     };
        // }
        // getImageIds()
        // console.log(cloudindaryData)
    }, [])

    return (
        <div className="scroll">


            <div className='gallery'>
                <Image
                className="single-image"
                src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1675232366/television_flowers/PICT2422_e7ybic.jpg'

                >

                </Image>

            </div>
        </div>
    );
};

export default ImageComponent; 