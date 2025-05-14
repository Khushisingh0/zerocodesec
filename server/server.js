// backend/server.js
const express = require('express');
const multer = require("multer");
const cors = require('cors');
const { scanFile } = require("./scanner.js");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Setup Multer for file upload
const upload = multer({ dest: "uploads/" });

// Upload and scan repo
app.post("/api/scan", upload.single("repoFile"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  const scannedFile = scanFile(req.file.path, "reports");
  res.json({
    message: "Scan completed",
    reportFile: path.basename(scannedFile)
  });
});

// Download scanned report
app.get("/api/report/:filename", (req, res) => {
  const filePath = path.join(__dirname, "reports", req.params.filename);
  res.download(filePath, (err) => {
    if (err) res.status(404).send("File not found");
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running `);
});
