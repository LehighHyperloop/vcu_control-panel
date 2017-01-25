import { computed, observable } from 'mobx'

// TODO: Make state level correspond with more advanced classnames (ex: loading spinner)

class SubsystemState {
  @observable name
  @observable level

  constructor(name, level) {
    this.name = name.toLowerCase()
    this.level = level.toLowerCase()
  }

  /*
    ok:
      Use1: #111
      Use2: Default?
      Use3: #00FF00
      Use4: #00FF00
    danger:
      Use1: #111
      Use2: Default?
      Use3: #FF0000
      Use4: #FF0000
    progress:
      5bc0de
    error:
      w/e dont know diff levels
  */

  getColor() {
    switch(this.level) {
      case "ok":
        return "#00FF00"
      case "stopped":
        return "#FF0000"
      case "error":
        return "#be1010"
      case "progress":
        return "#5BC0DE"
      default:
        return "#FFF"
    }
  }

}

class Subsystem {
  @observable id
  @observable name
  @observable currentState

  constructor(name, currentState) {
    this.id = Math.random()
    this.name = name.toLowerCase()
    this.currentState = currentState
  }

  getSubsystemState() {
    return this.currentState
  }

}

// TODO: Handle issues with lower/upper case

class SubsystemStore {
  @observable subsystems = []
  @observable subsystemStates = []

  createSubsystem(subsystemName, currentState) {
    this.subsystems.push(new Subsystem(subsystemName, currentState))
  }

  getSubsystem(subsystemName) {
    return this.subsystems.find(s => s.name === subsystemName)
  }

  updateSubsystem(subsystemName, newStateName) {
    subsystemName = subsystemName.toLowerCase()
    newStateName = newStateName.toLowerCase()

    let sys = this.subsystems.find(s => s.name === subsystemName)
    sys.currentState = this.getSubsystemStateByStateName(newStateName)
  }

  getSubsystemStateByStateName(stateName) {
    return this.subsystemStates.find(s => s.name === stateName)
  }
}

let subsystemStore = window.subsystemStore = new SubsystemStore

// all the possible states of subsystems
// defined here so we can define their "level" (color)
subsystemStore.subsystemStates = [
  new SubsystemState("STATE_UNKNOWN", "warning"),
  new SubsystemState("STOPPED", "stopped"),
  new SubsystemState("VFD_STARTING", "progress"),
  new SubsystemState("COMPRESSOR_STARTING", "progress"),
  new SubsystemState("RUNNING", "ok"),
  new SubsystemState("COMPRESSOR_STOPPING", "progress"),
  new SubsystemState("VFD_STOPPING", "progress"),
  new SubsystemState("FAULT", "error"),
  new SubsystemState("ESTOP", "error"),
  new SubsystemState("EXTENDED", "ok"),
  new SubsystemState("RETRACTED", "stopped"),
  new SubsystemState("READY", "stopped"),
  new SubsystemState("RUNNING", "ok"),
  new SubsystemState("RUNNING_AND_LOGGING", "ok"),
  new SubsystemState("DOWN", "stopped"),
  new SubsystemState("UP", "ok"),
  new SubsystemState("OFF", "stopped"),
  new SubsystemState("ON", "ok"),
]

subsystemStore.createSubsystem("Compressor", subsystemStore.subsystemStates[0])
subsystemStore.createSubsystem("Fan", subsystemStore.subsystemStates[0])
//subsystemStore.createSubsystem("Propulsion", subsystemStore.subsystemStates[0])
subsystemStore.createSubsystem("Levitation", subsystemStore.subsystemStates[0])
subsystemStore.createSubsystem("Suspension", subsystemStore.subsystemStates[0])
//subsystemStore.createSubsystem("Inverters", subsystemStore.subsystemStates[0])
subsystemStore.createSubsystem("Braking", subsystemStore.subsystemStates[0])
subsystemStore.createSubsystem("Wheels", subsystemStore.subsystemStates[0])

export default subsystemStore
