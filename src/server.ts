import express, { Application } from 'express';
import userRoutes from './routes/user';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // body reading
        this.app.use(express.json())

        // static files
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPath.users, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;