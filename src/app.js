const express = require("express");
const app = express();
const morgan = require("morgan");

// variables express
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
// Routes
app.use(require("./routes/index.routes"));

app.listen(app.get("port"), () => {
  console.log(`Servidor encendido en el puerto ${app.get("port")}`);
});
