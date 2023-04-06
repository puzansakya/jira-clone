import multer from 'multer';

/**
 * WRITE FILE TO DISK
 */
const storage_local = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    callback(null, './uploads/');
  },
  filename: function (req: any, file: any, callback: any) {
    callback(
      null,
      '/' + file.fieldname + '_' + Date.now() + '_' + file.originalname,
    );
  },
});

/**
 * WRITE FILE TO BUFFER
 */
const storage_memory = multer.memoryStorage();


/**
 * EXCEL FILTERS
 * @param req 
 * @param file 
 * @param cb 
 */
const excelFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml")
  ) {
    cb(null, true);
  } else {
    cb("Please upload only excel file.", false);
  }
};


export const upload = multer({ storage: storage_local });

export const upload_excel_file = multer({ storage: storage_local, fileFilter: excelFilter });
