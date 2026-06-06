import express from "express";
import path from "node:path";
import { createRouter } from "./routes.js";

const app = express();
const distDir = path.join(process.cwd(), "dist");

app.use(express.json());
app.use("/api", createRouter());
app.use(express.static(distDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server listening on 3000");
});
