import {Request, Response, Router} from 'express'
import ProductController from '../controllers/productController'


class ProductRoutes {
    router:Router
    productController:ProductController;
    
    constructor(DBConnection:any){
        
        this.productController = new ProductController(DBConnection);
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.get('/products', this.productController.all)
        this.router.get('/products:id', this.productController.get)
        this.router.post('/products', this.productController.store)
        this.router.put('/products:id', this.productController.update)
        this.router.delete('/products:id', this.productController.delete)

    }
}

export default ProductRoutes;