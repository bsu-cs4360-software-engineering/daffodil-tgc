import express from "express";
import DMS from "../dbManagement/databaseManagementSingleton";

const card_router = express.Router();

card_router.get("/getAllCards", async (req, res) => {
  const data = await DMS.getAllCards();
  res.json(data);
});

card_router.get("/getAllClasses", async (req, res) => {
  const data = await DMS.getAllClasses();
  res.json(data);
});

card_router.get("/getAllCards", async (req, res) => {
  const name = req.query.name
  //@ts-ignore
  const data = await DMS.getCardByName(name);
  res.json(data);
});

export default card_router;
