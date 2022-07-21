import express from "express";
// import handlebars from 'express-handlebars'
import { engine } from 'express-handlebars';
import path from "path";

import productsRouter from "./routes/productsRoutes";

// Create Express server
const app = express();
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views/`);



// Express configuration
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Products routes
app.use('/', productsRouter);

export default app;
