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

export default terminalStore
