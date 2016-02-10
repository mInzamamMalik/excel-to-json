# Installation
```javascript
npm install excel-data
```

# Read Data
```javascript
import {read} from 'excel-data'
//var read = require('excel-data').read;

read(
	[
		'test1.xlsx', 
		'test2.xlsx', 
		...
	],
	{
		skipRows: 0,		// optional: ignore first N rows
		mergeData: true,	// optional: merge same data from all sheets
		acceptsSheet: sheetName => sheetName.startsWith('employee')	// optional: sheetName as already in lowercase
	}
)
.then(result => {
	// code to proceed result
})
```

### Result
#### with mergeData = false
```javascript
{
	employee_2015: { //excel sheet name in lowercase & no spaces
		header: {
			originalColumns: ['First Name', 'Last Name', 'Email', 'DOB'],
			columns: ['firstname', 'lastname', 'email', 'dob']			
		},
		data: [
			{firstname: 'Bill', lastname: 'Gates', email: 'gates@yahoo.com', dob: '4/1/1945'},
			{firstname: 'Barack', lastname: 'Obama', email: 'barak@abc.com', dob: '6/30/1965'},
		]
	},
	employee_2016: {
		header: {
			originalColumns: ...
			columns: ...
		},
		data: [
			...
		]
	}
}
```

#### with mergeData = true
```javascript
{
	all: {	// all: represent for all sheets
		header: {
			originalColumns: ['First Name', 'Last Name', 'Email', 'DOB'],
			columns: ['firstname', 'lastname', 'email', 'dob']			
		},
		data: [
			{firstname: 'Bill', lastname: 'Gates', email: 'gates@yahoo.com', dob: '4/1/1945'},
			{firstname: 'Barack', lastname: 'Obama', email: 'barak@abc.com', dob: '6/30/1965'},
		]
	}
}
```
