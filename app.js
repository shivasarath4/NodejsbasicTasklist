const express = require('express');
const path = require('path');
const hbs = require('express-handlebars')
var index = require('./routes/index');
var tasks = require('./routes/tasks')

var app = express();

//views folder and view engine setup for express-handlebars
app.engine('hbs', hbs({extname:'.hbs'}));
app.set('view engine','hbs')

//static folder
app.use(express.static(path.join(__dirname,'public')));

//bodyparser middleware
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));


//routes for index and tasks
app.use('/',index);
app.use('/tasks',tasks)

// app.get('/',(req,res,next) => {
//   res.send(path.join(__dirname,'public'));
// })

app.listen(3000,() => {
  console.log("server up and listening")
});
