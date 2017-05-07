class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = this.crew.length ? false:true
    this.phasersCharge = "uncharged"

    if (crew.length > 0) {
      crew.forEach(function(member) {
        member.currentShip = this
      }.bind(this))
    }
  }
}
