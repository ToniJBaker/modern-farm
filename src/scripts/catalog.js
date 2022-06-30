

//create Catalog() to accept parameter(input) of the harvested food.
export const catalog = (harvestedFood) => {
    
    let htmlString = `<main class="container">`
       
       for (const objects of harvestedFood) {
        htmlString += 
        
        `<section class="plant">${objects.type}</section>`
     
        htmlString += `</main>`
    }
   
    return htmlString
}