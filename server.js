import axios from "axios";
import express from "express";
import cors from "cors";
import dot from "dotenv";

dot.config();
const port = 8000;
const app = express();

const apikey = process.env.VITE_FIREBASE_API_KEY;
const auth = process.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectid = process.env.VITE_FIREBASE_PROJECT_ID;
const storagebucket = process.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderid = process.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.VITE_FIREBASE_APP_ID;
app.use(cors());
const cred = {
  apiKey: apikey,
  authDomain: auth,
  projectId: projectid,
  storageBucket: storagebucket,
  messagingSenderId: messagingSenderid,
  appId: appId,
  measurementId:"G-901D7VLHYK",
};

app.get("/", (req, res) => {
  res.json(cred);
});

app.listen(port, () => {
  console.log(`server  runs... on ${port}`);
});
