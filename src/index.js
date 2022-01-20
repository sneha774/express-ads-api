const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const port = 3001;

const ads = [
    { "title": "Hello World" }
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send(ads);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});