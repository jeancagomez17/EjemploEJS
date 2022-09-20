import  express, {Express, Request, Response}  from 'express';
import {ModelUser} from './models/modelUser'
import path from 'path';

const app = express();
const port = 3000;
const Model = new ModelUser()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//directorio
app.use(express.static(path.join(__dirname, './public')))
//Middlewares

app.get('/', (req:Request, res:Response)=>{ 
    res.render('index', {titulo:'Ejemplo', personas:Model.getAllUser})

})
app.listen(port, () => {
    console.log('listening on port ' + port);
})
