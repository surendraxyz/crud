import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";
import connection from "./database/connection.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
connection();

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("server started");
});
