import express from "express";
import productController from "../app/controllers/ProductController.js";
const router = express.Router();

router.get('/add', productController.add)
router.get('/', productController.index)

export default router;