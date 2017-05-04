function Spaceship(nameInput, crewArray, phasersInput, shieldsInput) {
    this.name = nameInput
    this.phasers = phasersInput
    this.shields = shieldsInput
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = !crewArray.length ? true : false // 0 is falsey
    this.phasersCharge = "uncharged"

    if (crewArray.length) {
      crewArray.forEach(setShipToCrew.bind(this))
    }
  }

  var setShipToCrew = function(CrewMember) {
    CrewMember.currentShip = this
  }
