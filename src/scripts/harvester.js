//create function harvestPlants(), parameter(input) will be plants array.
//The function will return an array of seed objects
//Iterate the plants array, on each plant get the value of the output property, and add the number of plant objects equal to the output of each plant.

//Exception is corn: Half of the corn will be sold, so only return half of the corn objects.


export const harvestPlants = (plantsArray) => {

    let harvestArray = []
    for (const plantObjects of plantsArray){
        
        if (plantObjects.type === "Corn") {
            for (let i=0; i<plantObjects.output /2; i++){ 
            harvestArray.push(plantObjects)}}

        else { for(let i=0;i<plantObjects.output; i++) 
            {harvestArray.push(plantObjects)}

           
     }
        
    }

    return harvestArray
}
