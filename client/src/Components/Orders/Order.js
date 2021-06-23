export const ordAlpha = (a , b) =>{
    if(a.name < b.name) return -1
    if(b.name < a.name) return 1 
    return 0
}

export const ordPop = (a, b) =>{
   
    return a.population - b.population
}





