import { computed, observable } from 'mobx'

const defaultColor = "ececeb"

class Battery {
  @observable id
  @observable text
  @observable color

  constructor(text, color) {
    this.id = Math.random()
    this.text = text
    this.color = color || defaultColor
    console.log(this.color)
  }
}

class BatteryStore {
  @observable batteries = []

  createBattery(text, color) {
    this.batteries.push(new Battery(text, color))
  }
}

let batteryStore = window.batteryStore = new BatteryStore

batteryStore.createBattery("Tesla Battery 49.3V", "000000")
batteryStore.createBattery("SpaceX Bwooooshh 133.7V", "FF0000")
batteryStore.createBattery("Awkwardly long striiiiiiiiiiiiing.", "f0ad4e")
batteryStore.createBattery("Ok that wasn't long enough maybe this will test the text-wrapping", "5bc0de")
batteryStore.createBattery("default color")

export default batteryStore
