import express, {Application} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

import indexRoutes from './routes/indexRoutes'

class Server {
    public app: Application
    constructor(){
        this.app = express()
        this.config()
        this.routes()

    }

    config(){
        this.app.set('port',  3000)
        this.app.use(morgan('dev'))
        this.app.use(helmet())
    }

    routes(){
        
        this.app.use(indexRoutes)
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port s', this.app.get('port'))
        })
    }
}

const server = new Server()
server.start()