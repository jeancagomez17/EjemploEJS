import  express, {Express, Request, Response}  from 'express';
import router from './routes/ruta'
import path from 'path';

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//directorio
app.use(express.static(path.join(__dirname, './public')))
//Middlewares


app.use(router)

// app.get('/', (req:Request, res:Response)=>{ 
//     res.render('index', {titulo:'Ejemplo', personas:Users.getUsers()})
// })
app.listen(port, () => {
    console.log('listening on port ' + port);
})
