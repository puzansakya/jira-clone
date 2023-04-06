
import excel = require('node-excel-export');
// import * as excel from "node-excel-export"
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export const excelExporter = (
  specification: any,
  data: any,
  filename: string,
) => {
  const report = excel.buildExport([
    {
      name: filename,
      specification: specification,
      data: data,
    },
  ]);

  fs.writeFile(
    path.join(os.homedir(), 'Desktop', filename + Date.now() + '.xlsx'),
    report,
    function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    },
  );
};
