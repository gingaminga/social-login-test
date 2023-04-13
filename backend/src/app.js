import express from "express";
import cors from "cors";
import { KakaoClient } from "./kakao.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/login", async (req, res, next) => {
  try {
    const { code } = req.body;

    const { access_token, refresh_token } = await KakaoClient.getToken(code); // 토큰 받아오기
    const userData = await KakaoClient.getUserData(access_token); // 유저 정보 받아오기

    // 우리 서비스 로그인/회원가입 처리
    // 우리 서비스 토큰 발급
    // 등등 처리 해줘야 함..

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);

    const errorData = {
      message: "Internal server error.. :(",
    };
    res.status(500).json(errorData);
  }
});

app.get("/kakao/url", (req, res, next) => {
  const url = KakaoClient.getAuthCodeURL();

  res.status(200).json({
    url,
  });
});

export default app;
