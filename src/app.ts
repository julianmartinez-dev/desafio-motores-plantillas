import express from "express";
import path from "path";

import productsRouter from "./routes/productsRoutes";

// Create Express server
const app = express();
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);


app.set('views', `${__dirname}/views/`);
app.set('view engine', 'pug');



// Express configuration
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Products routes
app.use('/', productsRouter);

export default app;
