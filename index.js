const express = require('express');
const path = require('path');
const app =  express();
const ejs = require('ejs');


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
    res.render("index", {titulo: "Jeancito"})
})
// app.use(require('./routes/index'))
// app.use(require('./routes/notes'))
// app.use(require('./routes/users'))
//Server Listen
app.listen(app.get('port'), () =>{
    console.log(`Server listening on ${app.get('port')}`);
}) 