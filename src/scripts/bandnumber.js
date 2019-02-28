let bandNumber = 1
    
const takeNumber = function (bandName) {
    console.log(`${bandNumber}. ${bandName}`);
    bandNumber++;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  

const under = takeNumber("Underdogs")
console.log(under)  

const met = takeNumber("Metallica")
console.log(met)  

const gnr = takeNumber("Guns N Roses")
console.log(gnr)    