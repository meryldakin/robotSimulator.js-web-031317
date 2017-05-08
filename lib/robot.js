'use strict';

function Robot(coordinates, bearing) {
  this.coordinates = coordinates
  this.bearing = bearing
  this.orient = function (bearing) {
    if (["north", "south", "east", "west"].includes(bearing)){
      return this.bearing = bearing
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }
  this.at = function (x, y) {
    return this.coordinates = [ x, y ]
  }
  this.turnRight = function () {
    if (this.bearing === "north") {
      return this.orient("east")
    } else if (this.bearing === "east") {
      return this.orient("south")
    } else if (this.bearing === "south") {
      return this.orient("west")
    } else if (this.bearing === "west") {
      return this.orient("north")
    }
  }
  this.turnLeft = function () {
    if (this.bearing === "north") {
      return this.orient("west")
    } else if (this.bearing === "west") {
      return this.orient("south")
    } else if (this.bearing === "south") {
      return this.orient("east")
    } else if (this.bearing === "east") {
      return this.orient("north")
    }
  }
  this.advance = function () {
    if (this.bearing === "north") {
      return this.coordinates[1] += 1
    } else if (this.bearing === "west") {
      return this.coordinates[0] -= 1
    } else if (this.bearing === "south") {
      return this.coordinates[1] -= 1
    } else if (this.bearing === "east") {
      return this.coordinates[0] += 1
    }
  }

  this.place = function ({x: x, y: y, direction: direction}) {
    this.coordinates = [x, y]
    this.bearing = direction
  }

  this.instructions = function (string) {
    var directions = string.split("")
    return directions.map(function(direction) {
      if (direction === "R") {
        return "turnRight"
      } else if(direction === "L") {
        return "turnLeft"
      } else if (direction === "A") {
        return "advance"
      }
    })
  }

  this.evaluate = function (string) {
    var directions = this.instructions(string)
    var robot = this
    directions.forEach(function (direction) {
      if (direction === "turnRight") {
        robot.turnRight()
      } else if (direction === "turnLeft") {
        robot.turnLeft()
      } else if (direction === "advance"){
        robot.advance()
      }
    })
  }

}
