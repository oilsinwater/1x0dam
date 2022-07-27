import { getAllReports } from "../../lib/api";

export default async function getReports(req, res) {
  const data = await getAllReports();
  res.status(200).json(data);
}

// export default async function getPages(req, res) {
//   const data = await getAllPages();
//   res.status(200).json(data);