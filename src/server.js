import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import path from "path";
import configurations from "./config";
//Importing routes
import skatersRoutes from "./routes/skaters.routes";

//Initialization
const app = express();

//Settings
app.set('port', configurations.PORT);
app.set('viers', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
const paths = {
    skaters: "/api/skaters"
};

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(paths.skaters, skatersRoutes);

export default app;