import express, {Application} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import firebaseConfig from './config'
import * as admin from "firebase-admin";
import compression from 'compression'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import ProductRoutes from './routes/productRoutes'

class Server {
    public app: Application
    public db:any;
    

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    config(){
        admin.initializeApp(firebaseConfig)
        this.db = admin.database();
        this.app.set('port',  3000)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    routes(){
        
        this.app.use(indexRoutes)
        const productRoutes = new ProductRoutes(this.db)
        this.app.use(productRoutes.router)
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port s', this.app.get('port'))
        })
    }
}

const server = new Server()
server.start()