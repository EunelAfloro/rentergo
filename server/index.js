// import express
const express = require("express");
const app = express();  

app.get("/hello", (req, res) => {
    res.status(200).json({ mssg: "hello" });
    app.use("/api", router);
});

// create a port variable
const port = 5000;

// listen to our server on our localhost
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})