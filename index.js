var excel_data_1 = require('excel-data');
//var read = require('excel-data').read; 
excel_data_1.read(['excel files/Book1.xlsx'], {
    skipRows: 0,
    mergeData: true,
}).then(function (result) {
    console.log(JSON.stringify(result));
    // code to proceed result 
});
