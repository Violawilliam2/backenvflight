import express from "express";
import {
  createNgodata,
  deleteNgodata,
  fetchNgodatas,
  updateNgodata,
} from "../controllers/ngodata.js";
const ngoRouter = express.Router();
ngoRouter.get("/", fetchNgodatas);
ngoRouter.post("/", createNgodata);
ngoRouter.put("/", updateNgodata);
ngoRouter.delete("/", deleteNgodata);
export default ngoRouter;
