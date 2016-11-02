"use strict"

const express = require('express');
let app = express();

app.get("/", (req, res) =>
{
   res.status(200).send("Hello... I am " + process.env.HOSTNAME);
});

app.listen(3000, () => {
   console.log("I'm listening from " + process.env.ENV_VARIABLE)
});

