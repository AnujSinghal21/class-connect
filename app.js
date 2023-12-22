const express=require('express');
const connect=require('./database/connect.js');
const APIRouter=require('./api/router.js');
const dotenv=require('dotenv');
const cors=require('cors');
const path = require('path')
const bodyparser=require('body-parser');
const app=express();


dotenv.config();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyparser.urlencoded({ extended: false }));

connect();

const serveFrontend = (request, response) => {
    response.sendFile(path.join(__dirname, 'dist', 'index.html'), {
      headers: {
        'Content-Type': 'text/html',
      }
    })
}
  
app.get('/', serveFrontend)
app.get('/courses', serveFrontend)
app.get('/profs', serveFrontend)
app.get('/about', serveFrontend)


app.use('/api', APIRouter);
//console.log(typeof process.env.PORT);
app.listen(parseInt(process.env.PORT,10));