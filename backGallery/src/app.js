import express from "express";
import mongoose from "mongoose";
import {} from "dotenv/config";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://artGallery:artGallery@artgallerytest.aw8rdnu.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
//for error catching
// app.use((err, req, res) => {
//   res.status(500).send({ message: err.message });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Serve at http://localhost:${port}");
});
