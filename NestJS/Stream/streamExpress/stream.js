import express from 'express';
import fs from 'fs';
import status from "express-status-monitor";

const app = express();
const port = 3000;
app.use(status());

app.get("/", (req, res) => {
    // fs.readFile("./samplePHP.txt", (err, data) => {
    // res.end(data);
    // });
    const stream = fs.createReadStream("./samplePHP.txt", "utf8");
    stream.on("data", (chunk) => {
        res.write(chunk);
    })
    stream.on("end", () => res.end());
})

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})
