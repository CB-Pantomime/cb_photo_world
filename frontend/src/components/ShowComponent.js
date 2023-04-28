
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const ShowComponent = () => {
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

export default ShowComponent;