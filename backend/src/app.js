import express from "express";
import cors from "cors";
import { KakaoClient } from "./kakao.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/kakao/url", (req, res, next) => {
  const url = KakaoClient.getAuthCodeURL();

  res.status(200).json({
    url,
  });
});

export default app;
