import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


import fertilizerReqRoutes from './FamFertilizer/routes/fertilizerReqRoutes.js'
import route from "./warehouse/routes/warehouseRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));


app.use('/WarehouseRoutes', route);
app.use('/FertilizerReqRoutes', fertilizerReqRoutes);


