const zipcodeService = require('../src/services/zipcode')

describe('zipcode service test', () => {
    test('getbycoords', async () => {
        const zipcode = await zipcodeService.getbycoords(43.047939,-76.147453)
        expect(zipcode).toMatch(/^\d{5}$/)
    })
})