//create plantSeeds() that will take parameter(input), a yearlyPlan. 
import {createPotato} from './seeds/potato.js'
import {createAsparagus} from './seeds/asparagus.js'
import {createWheat} from './seeds/wheat.js'
import {createSunflower} from './seeds/sunflower.js'
import {createSoybean} from './seeds/soybean.js'
import {createCorn} from './seeds/corn.js'
import { addPlant } from './fields.js'


export const plantSeeds = (thisYearsPlan) => {
    for (const row of thisYearsPlan ) {
    
        for ( const plant of row) { 
        
            if (plant === "Potato") 
                {let potatoObject = createPotato()
                     addPlant(potatoObject)}
            else if (plant === "Corn") 
                {let cornObject = createCorn() 
                        addPlant(cornObject)}
            else if (plant === "Soybean")
                {let soybeanObject = createSoybean()
                    addPlant(soybeanObject)}
            else if (plant === "Wheat")
                {let wheatObject = createWheat()
                     addPlant(wheatObject)}
            else if (plant === "Sunflower") 
                {let sunflowerObject = createSunflower()
                     addPlant(sunflowerObject)}
            else if (plant === "Asparagus")
                {let asparagusObject = createAsparagus()
                     addPlant(asparagusObject)}
        }

    }
    
}