
//The variable fieldOfSeeds in this module is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.

let fieldOfSeeds = []


//addPlant() function will have parameter(input) as a seedObject
//
export const addPlant = (seedObject) => {
    if(!seedObject.type) {
        for (const singleObject of seedObject) {
        fieldOfSeeds.push(singleObject)}
    }
    else {   
        fieldOfSeeds.push(seedObject)
    
    
    } 

    //   return fieldOfSeeds
}




export const usePlants = () => {
    return fieldOfSeeds.map(art => ({...art}))
}