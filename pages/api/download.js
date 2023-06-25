import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/main/resume.pdf');
  const stat = fs.statSync(filePath);

  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Natasya Khoo Resume.pdf"');

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}