import express from "express";
import cors from "cors";
import { getAllCryptoCurrencies, getCryptoCurrencyBySymbol } from "./controllers/getCryptoInformation.js";
import * as dotenv from "dotenv";
dotenv.config({ path: './.env.local' });

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

router.get("/api/crypto", getAllCryptoCurrencies);
router.get("/api/crypto/:symbol", getCryptoCurrencyBySymbol);
app.use(router);

app.listen(5000, () => {
    console.log("Server running successfully");
});