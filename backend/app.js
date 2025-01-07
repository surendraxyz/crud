import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import connection from "./database/connection.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
connection();

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("server started");
});
