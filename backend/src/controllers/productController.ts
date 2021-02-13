import {Request, Response, Router} from 'express'
import ProductModel from '../models/productModel';

class ProductController {
    db:any;
    productModel:ProductModel;
    
    constructor(DB:any){
        this.db = DB
    }

    async all(req:Request, res:Response){
        const productModel:ProductModel = new ProductModel(this.db)
        const products = await productModel.all();
        res.json(products);
    }

    get(req:Request, res:Response){
        
        res.send('uno')
    }

    store(req:Request, res:Response){

        res.send('crear uno');
    }

    update(req:Request, res:Response){
        res.send('update 1');
    }

    delete(req:Request, res:Response){
        res.send('delete');
    }

}

export default ProductController