import express from 'express';
import productRouter from './product.js';
import siteController from '../app/controllers/SiteController.js';

const router = express.Router();

router.use('/product', productRouter)

router.get('/', siteController.index)

export default router;