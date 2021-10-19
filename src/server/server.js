const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const fileUpload = require('express-fileupload');
const cors = require('cors')
const path = require('path')
const configurations = require('../config/config')

//Importing routes
const skatersRoutes = require("../routes/skaters.routes");
const indexRoutes = require("../routes/index.routes");
const loginRoutes = require("../routes/auth.routes");

//Config paths
const paths = {
    skaters: "/api/skaters",
    auth: "/auth"
};

//Initialization
const app = express();

//Settings
//Port
app.set('port', configurations.PORT);
//View engine
app.set('views', path.join(__dirname, '../views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');




//Middleware
app.use(fileUpload());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use(paths.auth, loginRoutes);
app.use(paths.skaters, skatersRoutes);
app.use('/', indexRoutes)

//Static files
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/axios', express.static(path.join(__dirname, '../../node_modules/axios/dist')))
app.use(express.static(path.join(__dirname, '../public')));


module.exports = app;