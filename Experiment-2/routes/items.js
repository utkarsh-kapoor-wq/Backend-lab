import express from "express";
import {
  addPost,
  getAllItems,
  updateItem,
  deleteItem,
} from "../../Backend-lab/Experiment-2/controllers/itemsController.js";

const router = express.Router();

router.get("/items", getAllItems);
router.post("/items", addPost);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

export default router;
