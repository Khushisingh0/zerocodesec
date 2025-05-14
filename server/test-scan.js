const { scanFile } = require('./scanner');
const path = require('path');

// Input file and output directory
const filePath = path.join(__dirname, 'uploads', 'example.js');
const outputDir = path.join(__dirname, 'reports');

// Run the scan
const result = scanFile(filePath, outputDir);

// Log results
console.log("✅ Scan Complete:");
console.log("Original File:", result.originalName);
console.log("Scanned File:", result.scannedFileName);
console.log("Saved At:", result.scannedFilePath);
