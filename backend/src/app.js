import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/kakao/url", (req, res, next) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000/callback/kakao";

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  res.status(200).json({
    url,
  });
});

export default app;
