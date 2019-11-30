const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const url = 'mongodb://localhost:27017/restAPI';
const port = process.env.port || 5000;
const hbs = require('express-hbs');
const path = require('path');

//db connection
mongoose.connect(url, {useUnifiedTopology: true,useNewUrlParser: true }, ()=>console.log('Db connected !!'));

//bodyparser
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/views')));

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views'
  }));
  app.set('view engine', 'hbs');
  app.set('views', __dirname + '/views');

//EJS
// app.use(expressLayouts);
// app.set('view engine', 'ejs');

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(port, console.log(`Server started on port : ${port}`));