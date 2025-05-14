// scanner.js
const fs = require("fs");
const path = require("path");

function scanFile(filePath, outputDir) {
const fileName = path.basename(filePath); // original file name
  const scannedFileName = `scanned-${fileName}`; // scanned file name
  const outputPath = path.join(outputDir, scannedFileName); // full path

  // Simulate a scan by appending vulnerability notes to a new file
  const content = fs.readFileSync(filePath);
  const result = content + "\n\n// Simulated vulnerability report:\n// No critical vulnerabilities found.";
  fs.writeFileSync(outputPath, result);

   return {
    originalName: fileName,
    scannedFileName: scannedFileName,
    scannedFilePath: outputPath,
  };
}

module.exports = { scanFile };
