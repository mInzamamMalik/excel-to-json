import {read} from 'excel-data';
//var read = require('excel-data').read; 
 
read([ 'excel files/time.xls' , 'excel files/Book1.xlsx' ],	{ // path to excel files or name of excel files if on root

		skipRows: 0,		// optional: ignore first N rows 
		mergeData: true,	// optional: merge same data from all sheets 
		// acceptsSheet: sheetName => sheetName.startsWith('employee')	// optional: sheetName as already in lowercase 
	
}).then(result => {

    console.log(JSON.stringify(result));
	// code to proceed result 

})