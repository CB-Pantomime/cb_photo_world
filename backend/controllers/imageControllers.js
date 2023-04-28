
import { cloudinary } from '../utils/cloudinary.js';

import asyncHandler from 'express-async-handler';
// No image Model at this point, we are getting resources direct 
// from Cloudinary
// bring in Cloudinary


// @desc    Fetch all images
// @route   GET /api/images
// @access  Public 
export const getAllImages = asyncHandler( async (req, res) => {
    try {
        const { resources } = await cloudinary.search
            .expression('folder:television_flowers')
            .sort_by('created_at', 'desc')
            .max_results(5)
            .execute()
        // .expression('folder:cb_photoWorld_v1')
        const data = resources.map((file) => file.public_id);
        
        console.log('success get');
        console.log(data);
        res.send(data);

    } catch {
        console.log(`This is a GET error: ${err}` + err);
        res.status(500).json({ msg: 'Something went wrong' });
    }
});

