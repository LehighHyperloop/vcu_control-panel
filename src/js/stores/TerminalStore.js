import { computed, observable } from 'mobx'

class Message {
  @observable id
  @observable time
  @observable source
  @observable body

  constructor(time, source, body) {
    this.id = Math.random()
    this.time = time
    this.source = source
    this.body = body
  }
}

class TerminalStore {
  @observable messages = []

  createMessage(time, source, body) {
    this.messages.push(new Message(time, source, body))
  }
}

let terminalStore = window.terminalStore = new TerminalStore

// populate with some dummy data
for(var i = 0; i < 10; i++) {
  terminalStore.createMessage("17:41:221", "levitation/controller", "All systems OK")
  terminalStore.createMessage("17:42:455", "main_controller", "Prepare for liftoff")
  terminalStore.createMessage("17:43:787", "sensor/front_right/temp", "We are going fast")
}

export default terminalStore
