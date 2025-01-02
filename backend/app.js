import express from "express";
import dotenv from "dotenv";
import router from "./route/router.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/", router);

app.listen(port, () => {
  console.log("server started");
});
