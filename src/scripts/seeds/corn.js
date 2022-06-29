const idNumber = 1

let cornSeed = {}
let cornSeedArray = []

export const createCorn = () => {
    
    cornSeed = {
        type: "Corn" ,
        height: 180,
        output: 6,
    }
    
    cornSeedArray.push(cornSeed, cornSeed)
    return cornSeedArray
}