import * as dotenv from "dotenv";
dotenv.config();
// BigInt의 JSON 변환 방식 오버라이드
BigInt.prototype.toJSON = function () {
  return this.toString();
};
import express from "express";
import cors from "cors";
import startupsRoute from "./routes/startupsRoute.js";
import investmentsRoute from "./routes/investmentsRoute.js";
import comparisonsRoute from "./routes/comparisonsRoute.js";
import selectionsRoute from "./routes/selectionsRoute.js";
import session from "express-session";

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "yourSecretKey", // 세션 암호화 키
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 60 * 24 }, // 24시간 동안 유효
  }),
);

const corsOption = {
  origin: [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://view-mystartup.netlify.app/",
  ],
};
app.use(cors(corsOption));

// Content-Type 검사 미들웨어
app.use((req, res, next) => {
  // `PATCH`와 `POST` 요청에 대해 Content-Type을 검사
  if (
    (req.method === "POST" || req.method === "PATCH") &&
    !req.is("application/json")
  ) {
    return res
      .status(400)
      .send({ message: "Content-Type must be application/json" });
  }
  next();
});

app.use("/api/startups", startupsRoute);
app.use("/api/comparisons", comparisonsRoute);
app.use("/api/selections", selectionsRoute);
app.use("/api/investments", investmentsRoute);

// 모든 요청 시 세션 ID 생성
app.use((req, res, next) => {
  if (!req.session.sessionId) {
    req.session.sessionId = generateSessionId();
  }
  console.log("Current Session ID:", req.session.sessionId);
  next();
});

function generateSessionId() {
  return Math.random().toString(36).substring(2, 15);
}

app.get("/api/session", (req, res) => {
  res.send({ sessionId: req.session.sessionId });
});

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
