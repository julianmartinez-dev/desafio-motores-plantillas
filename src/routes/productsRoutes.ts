import express, { Request, Response } from 'express';

import { addProduct, deleteProduct, getAllProducts, getProductById } from '../controllers/productsControllers';

const router = express.Router();


router
  .route('/')
  .get( (_req: Request, res : Response) => res.render('form'))

router
  .route('/productos')
  .get(getAllProducts)
  .post(addProduct);

router
  .route('/productos/:id')
  .get(getProductById)
  .delete(deleteProduct);

export default router;
