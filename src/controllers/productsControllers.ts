import { Request, Response } from 'express';

import { Contenedor } from '../contenedor';

const contenedor = new Contenedor('data');

const getAllProducts = async (req: Request, res: Response) => {
  const products = await contenedor.getAll();

  res.render('pages/productos',{
    products,
    productsExist : true
  });
};

const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await contenedor.getById(Number(id));

  if(!product){
    res.render('pages/productos',{ productsExist : false })
    return;
  }

  res.render('pages/productos', {
    products : [product],
    productsExist : true
  });
};

const addProduct = async (req: Request, res: Response) => { 
  const product = req.body;

  if(!product.title) {
    res.render('form')
    return;
  }

  await contenedor.save(product);

  res.render('pages/productos',{
    products : await contenedor.getAll(),
    productsExist : true
  })
};

const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await contenedor.deleteById(Number(id));
    res.status(200).json('Producto eliminado');
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export { addProduct, deleteProduct,getAllProducts, getProductById };