import {expect} from 'chai'
import {toLowerAndNoSpaceStringsArray} from '../../src/utils/array'

describe("utils", () =>
	describe("array", () =>
		describe('#toLowerAndNoSpaceStringsArray', () => 
			it('should return lowercase and remove all spaces for all items', () =>
				expect(toLowerAndNoSpaceStringsArray(['aBc', 'X yZ'])).to.eql(['abc', 'xyz'])
			)
		)
	)
)