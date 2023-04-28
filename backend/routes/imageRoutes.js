
import express from 'express';

import { getAllImages } from '../controllers/imageControllers.js';

const router = express.Router();

router.route('/images').get(getAllImages)

export default router;