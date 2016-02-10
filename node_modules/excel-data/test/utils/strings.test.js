import {expect} from 'chai'
import {toLowerAndNoSpace} from '../../src/utils/strings'


describe("utils", () =>
	describe("string", () =>
		describe('#toLowerAndNoSpace', () => 
			it('should return lowercase and remove all spaces', () =>
				expect(toLowerAndNoSpace('  A b  cDE')).to.equal('abcde')
			)
		)
	)
)
