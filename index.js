const express = require('express');
const path = require('path');
const app =  express();
const ejs = require('ejs');
// const modelo = require('./models/modelUser.ts')



//Settings
app.set('port',process.env.PORT || 3000)



//objeto de config
//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//directorio
app.use(express.static(path.join(__dirname, './public')))
//Middlewares
app.use(express.urlencoded({ extends:false}))//

//Global Variables

//Static files

//Routes 
app.get('/', (req, res) => {
    res.render("index", {titulo: "Mishell"})
})

//Server Listen
app.listen(app.get('port'), () =>{
    console.log(`Server listening on ${app.get('port')}`);
}) 
