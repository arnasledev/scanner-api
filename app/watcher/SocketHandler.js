import EventsHandler from '../helpers/EventsHandler'
import socket from 'socket.io'

export default class SocketHandler {

    constructor(server) {
        this.io = socket.listen(server)
        this.events = EventsHandler

        this.init().then(() => console.log('Sockets server started'))
    }

    async init() {
        this.io.on('connection', socket => {
            console.log(`Socket ${socket.id} connection created`)

            this.events.on('newScanData', data => {
                console.trace('Processing scanned data to front-end...')
                socket.emit('newData', data)
            })
        })

        this.io.on('disconnect', socket => {
            console.warn(`Socket ${socket.id} connection destroyed`)
        })

        return true
    }

}