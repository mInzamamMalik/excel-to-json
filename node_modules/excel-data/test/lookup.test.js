import {expect} from 'chai'
import {read, Lookup} from '../src/index'

describe('Lookup', () => {
	
	let lookup

	before(() => {
		Promise
			.all([
					read('./test/test_data/lookup/global_lookup_tables.xlsx'),
					read('./test/test_data/lookup/local_lookup_tables.xlsx')
				])
			.then(data => lookup = new Lookup(...data))
	})

	describe('#load', () =>
		it('should load all enums', () => {		
			const enums = lookup.getEnums()
			expect(enums.years).not.to.be.undefined
			expect(enums.unknow).to.be.undefined
		})
	)

	describe('#lookupName', () => {
		
		it('should return a valid enum name', () => {				
			const mapColumns = {
				_protocol_: 'protocols'
			}

			const enumName = lookup.lookupName('_protocol_', mapColumns)
			expect(enumName).to.equal('protocols')
		})
		

		it('should return enum name = null', () => {
			const enumName = lookup.lookupName('_protocol_', null)
			expect(enumName).to.be.null
		})
	})


	describe('#lookupValue', () => {
		
		it('should return a valid enum value', () => {								
			const enumItem = lookup.lookupValue('PROTOCOL_BOSCH', 'protocols')
			expect(enumItem.value).to.equal('9')
		})
		

		it('should return enum value = null', () => {				
			const enumItem = lookup.lookupValue('DUMMY KEY', 'protocols')
			expect(enumItem).to.be.null
		})


		it('should return a valid special enum value', () => {
			const enumItem = lookup.lookupValue(
				{
					key: '16 00 00',
					offset: '0',
					dtcframe: '1',
					dtcformat: '1'
				}, 
				'readdtccommandlist')
			
			expect(enumItem.key).to.equal('16 00 00')
			expect(enumItem.offset).to.equal('0')
			expect(enumItem.dtcframe).to.equal('1')
			expect(enumItem.dtcformat).to.equal('1')
			expect(enumItem.value).to.equal('8')
		})
	})
})	
