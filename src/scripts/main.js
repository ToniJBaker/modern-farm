import {createPlan} from './plan.js'
import {createPotato} from './seeds/potato.js'
import {createAsparagus} from './seeds/asparagus.js'
import {createWheat} from './seeds/wheat.js'
import {createSunflower} from './seeds/sunflower.js'
import {createSoybean} from './seeds/soybean.js'
import {createCorn} from './seeds/corn.js'
import {addPlant, usePlants} from './fields.js'
import {plantSeeds} from './tractor.js'


//testing if first array from plan.js
const yearlyPlan = createPlan()
console.log(yearlyPlan)
//testing if potato object is returned
const testPotatoObject = createPotato()
console.log(testPotatoObject)
//testing if corn array is returned
const testCornArray = createCorn()
console.log(testCornArray)
const testAsparagusObject = createAsparagus()
console.log(testAsparagusObject)
const testSoybeanObject = createSoybean()
console.log(testSoybeanObject)
const testWheatObject = createWheat()
console.log(testWheatObject)
const testSunflowerObject = createSunflower()
console.log(testSunflowerObject)

// //testing if the potato seeds will be added to the fieldOFSeeds[]
// let fieldOfPotatoes = addPlant(testPotatoObject)
// console.log(fieldOfPotatoes)
// let fieldOfCorn = addPlant(testCornArray)
// console.log(fieldOfCorn)



let fieldOfPlants = plantSeeds(yearlyPlan)
console.log(fieldOfPlants)
const fieldInventory = usePlants()
console.log(fieldInventory)




console.log("Welcome to the main module")


