import express from "express";
import router from "./src/routes/items.js";

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
