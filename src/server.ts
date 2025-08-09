import express, {Application} from 'express';
import router from './Routes/RouterUsers';

const app: Application = express(); 

app.use(express.json());

app.use('/users', router)

app.listen(3000, () => {
    console.log('The server is run'); 
})