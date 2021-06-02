import { Application, json, urlencoded } from "express";
const session = require('express-session')
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors')
import {main as mainRouter} from './router/main'



const app:Application = express();
app.use(cors())
app.use(compression());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(session({
    secret: "@#@MYSIGN#@&#&",
    resave: false,
    saveUninitialized: true
}))

 mainRouter(app)
 app.set('views', `${__dirname}/views`);
 app.set('view engine', 'ejs');
 app.engine('html', require('ejs').renderFile);
 app.use(express.static('public'))

  app.listen(8000, () => {
    console.log('Express server has started on port 8000');
  });