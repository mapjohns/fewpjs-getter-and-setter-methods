// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    get diameter() {
        return this.radius * 2 ;
      }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius**2)
    }

    set diameter(number) {
        return this.radius = number/2
    }

    set circumference(number) {
        return this.radius = (number)/(2*Math.PI)
    }

    set area(number) {
        return this.radius = Math.sqrt(number/Math.PI)
    }
}