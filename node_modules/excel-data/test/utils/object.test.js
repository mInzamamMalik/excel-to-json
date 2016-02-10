import {expect} from 'chai'
import {partOfObject} from '../../src/utils/object'

describe('utils', () =>
	describe('object', () =>
		describe('#partOfObject', () =>
			it('should be true', () => 
				expect(
					partOfObject(
						{a: 10, c: 'abc'}, 
						{a: 10, b: 'job@gmail.com', c: 'abc', d: true}
					)
				).to.be.true
			)
		)
	)
)