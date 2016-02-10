import {toLowerAndNoSpace} from './strings'

function toLowerAndNoSpaceStringsArray(arr) {
	arr = arr || []
	return arr.map(i => toLowerAndNoSpace(i))
}

module.exports = {
	toLowerAndNoSpaceStringsArray
}