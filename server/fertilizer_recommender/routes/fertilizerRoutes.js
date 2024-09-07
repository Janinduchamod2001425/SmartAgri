import express from "express";

import { fcreate, fdelete, fgetAll, fgetOne, fupdate } from "../controller/fertilizerController.js";


const route = express.Router();

route.post("/fcreate",fcreate);
route.get("/fgetall",fgetAll);
route.get("/fgetone/:id",fgetOne);
route.get("/fupdate/:id",fupdate);
route.delete("/fdelete/:id",fdelete);

export default route;