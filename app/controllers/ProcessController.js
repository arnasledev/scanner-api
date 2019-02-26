import EventsHandler from '../helpers/EventsHandler'
import Faker from 'faker'

const renderDatabaseData = () => {
    const data = [...Array(100)].map((_, i) => {
        const address = `${Faker.address.streetAddress()}, ${Faker.address.city()}, ${Faker.address.country()}`
        const bankDetails = {
            account: Faker.finance.account(),
            iban: Faker.finance.iban()
        }

        return {
            id: `scan_${i}`,
            name: Faker.name.findName(),
            email: Faker.internet.email(),
            address,
            bankDetails,
            phone: Faker.phone.phoneNumber()
        }
    })

    const items = {}
    for (let item in data) {
        const itemData = data[item]
        items[itemData.id] = itemData
    }

    return items
}

export default class ProcessController {

    constructor() {
        this.events = EventsHandler
        this.databaseData = renderDatabaseData()
    }

    async scan(req, res) {
        console.log('Retrieved new scanned data, scan ID: ' + req.body.scanId)

        await this.events.emit('newScanData', this.databaseData[`scan_${req.body.scanId}`])
        return res.send({message: 'Data processed'})
    }

}