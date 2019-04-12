const express = require("express");
require('dotenv').config();
const app = express();
const PORT = 3060;
const controller = require('./controller');
const massive = require("massive");

massive(process.env.CONNECTION_STRING).then(dbInstance => {app.set('db', dbInstance);
console.log("Database connected");
});

app.use(express.json());


app.get("/api/inventory", controller.read);
// app.post("/api/inventory", controller.create);
// app.put("/api/inventory/:id", controller.update);
// app.delete("/api/inventory/:id", controller.delete);



app.listen(PORT, () =>  console.log("Listening on ${PORT}"));



