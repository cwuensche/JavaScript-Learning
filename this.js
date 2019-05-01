function car() {
    console.log( this.make );
}

var carObj = { make: "2010", car: car };
carObj.car();