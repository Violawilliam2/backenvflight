import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import contactsRouter from "./routes/contacts.js";
import newsRouter from "./routes/news.js";
import commentRouter from "./routes/comment.js";
import coursesRouter from "./routes/course.js";
import registrationsRouter from "./routes/registrations.js";

import ngoRouter from "./routes/ngodata.js";

const app = express();
dotenv.config();
app.use(cors());
mongoose.set("strictQuery", true);
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use("/users", userRouter);
app.use("/contacts", contactsRouter);
app.use("/news", newsRouter);
app.use("/comment", commentRouter);
app.use("/course", coursesRouter);
app.use("/registration", registrationsRouter);
app.use("/ngodatas", ngoRouter);

app.get("/", (req, res) => {
  res.send("Hello! welcome to vFlight database!");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://vflight:vflight5506@cluster0.uoxvqwr.mongodb.net/vflight"
  )
  .then(
    app.listen(PORT, () =>
      console.log(`Your app is running on port http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
  });
