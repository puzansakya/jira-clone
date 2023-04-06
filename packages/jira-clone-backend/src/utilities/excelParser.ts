import xlsx from 'node-xlsx';
import * as fs from 'fs';

export const parse_excel = (filepath: any) => {
  // Parse a buffer
  // const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
  // Parse a file
  const workSheetsFromFile = xlsx.parse(filepath);

  return workSheetsFromFile;
};
