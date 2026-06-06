import express from "express";
import { createRecord, getRecord, listRecords } from "./store.js";

export function createRouter() {
  const router = express.Router();

  router.get("/dashboard", (_req, res) => {
    const records = listRecords();
    res.json({
      title: "dashboard",
      totals: [
        { label: "总记录", value: String(records.length) },
        { label: "进行中", value: String(records.filter((item) => item.status === "进行中").length) },
        { label: "高优先级", value: String(records.filter((item) => item.priority === "高").length) }
      ],
      records
    });
  });

  router.get("/records", (_req, res) => {
    res.json(listRecords());
  });

  router.get("/records/:id", (req, res) => {
    const item = getRecord(req.params.id);
    if (!item) {
      res.status(404).json({ error: "not_found" });
      return;
    }
    res.json(item);
  });

  router.post("/records", (req, res) => {
    const created = createRecord(req.body as { title: string; owner: string; note: string });
    res.status(201).json(created);
  });

  return router;
}
