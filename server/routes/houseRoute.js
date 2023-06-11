import express from "express";
const router = express.Router();

import {
  post,
  postMultiple,
  getOne,
  getAll,
  update,
  destroy,
  destroyAll,
} from "../controllers/house";

router.post("/", post);

router.post("/multiple", postMultiple);

router.get("/", getAll);

router.get("/:id", getOne);

router.patch("/:id", update);

router.delete("/:id", destroy);

router.delete("/", destroyAll);

export default router;
