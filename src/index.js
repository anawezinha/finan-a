const express = require("espress");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(2000, () => {
    console.log("Server in 2000");
})
