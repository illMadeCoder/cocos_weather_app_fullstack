const weatherService = require('../src/services/weather')

describe('weather service test', () => {
    test('getbycoords', async () => {
        const weather = await weatherService.getbycoords(43.047939,-76.147453)

        expect(weather).toHaveProperty('weatherCode')
        expect(weather).toHaveProperty('temperature')
        expect(weather).toHaveProperty('time')
        expect(weather).toHaveProperty('zipcode')
        expect(weather).toHaveProperty('name', 'Syracuse')

    })

    test('getbyzipcodeUnexpectedError', async () => {
        await expect(async () => {
            await weatherService.getbyzipcode()
        }).rejects.toThrowError()
    })

    
    // test('getbyzipcodeInvalidAccess', async () => {
    //     await expect(async () => {
    //         for (i=0; i < 250; i++) {
    //             await weatherService.getbyzipcode(13206)
    //         }            
    //     }).rejects.toThrowError('ACCESS_KEY_EXPIRED')
    // })

    test('getbyzipcodeUnexpectedError', async () => {
        await expect(async () => {
            await weatherService.getbyzipcode()
        }).rejects.toThrowError()
    })

    test('getbyzipcode', async () => {
        const weather = await weatherService.getbyzipcode(13206)

        expect(weather).toHaveProperty('weatherCode')
        expect(weather).toHaveProperty('temperature')
        expect(weather).toHaveProperty('time')
        expect(weather).toHaveProperty('zipcode', 13206)
        expect(weather).toHaveProperty('name', 'Syracuse')
    })
})