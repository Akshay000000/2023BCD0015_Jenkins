const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/student-details", (req, res) => {
    res.json({
        name: "Akshay Sriram",
        rollNumber: "23BCD15",
        registerNumber: "2023BCD0015"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});