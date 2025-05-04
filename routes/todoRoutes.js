import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodoStatus,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/toggle", toggleTodoStatus);

export default router;
