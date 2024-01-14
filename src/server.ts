import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/protect";
import { createNewUser, signin } from "./handlers/user";
const app = express();

const customMiddleware = (req, res, next) => {
  console.log("hello from custom middleware");
  req.secret = "secret message";
  next();
};

// Middleware
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customMiddleware);

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({message:"hello"});
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;