import fs from "node:fs";
import path from "node:path";
import { seedRecords } from "./seed.js";

const filePath = path.join(process.cwd(), "data", "records.json");

function ensureDataFile() {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(seedRecords, null, 2));
  }
}

export type RecordItem = {
  id: string;
  title: string;
  owner: string;
  status: string;
  priority: string;
  note: string;
};

export function listRecords(): RecordItem[] {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as RecordItem[];
}

export function getRecord(id: string): RecordItem | undefined {
  return listRecords().find((item) => item.id === id);
}

export function createRecord(input: { title: string; owner: string; note: string }): RecordItem {
  const records = listRecords();
  const item: RecordItem = {
    id: `r${records.length + 1}`,
    title: input.title,
    owner: input.owner,
    status: "新建",
    priority: "中",
    note: input.note
  };
  records.unshift(item);
  fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
  return item;
}
