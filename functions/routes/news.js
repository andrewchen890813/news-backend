import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { keyword } = req.query;
    const url = `https://opendata.ey.gov.tw/api/ExecutiveYuan/NewsEy?Keyword=${keyword}&MaxSize=200&IsRemoveHtmlTag=true`;
    const response = await fetch(url);

    // 檢查 response 是否成功
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "取得新聞失敗" });
  }
});

export default router;
