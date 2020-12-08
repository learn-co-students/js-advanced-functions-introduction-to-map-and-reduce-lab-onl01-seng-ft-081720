// Your code here
const mapToNegativize = function(sourceArray){
    return sourceArray.map(n => n * -1)
}
const mapToNoChange = function(sourceArray){
    return sourceArray
}
const mapToDouble = function(sourceArray){
    return sourceArray.map(n => n * 2)
}
const mapToSquare = function(sourceArray){
    return sourceArray.map(n => n**2)
}

const reduceToTotal = function(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total = total + sourceArray[i]
    }

    return total
}
const reduceToAllTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true
}
const reduceToAnyTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}