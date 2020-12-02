// Your code here
const mapToNegativize = (sourceArray) =>{
    return sourceArray.map(sou => sou *= -1)
  
} 

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map(sou => sou *= 2)
} 

const mapToSquare = (sourceArray) => {
    return sourceArray.map(sou => sou * sou)
} 

function reduceToTotal(sourceArray, startingPoint =0){
const reducer = function(accumulator, currentValue){ return accumulator + currentValue }
  return sourceArray.reduce(reducer, startingPoint)
}
function reduceToAllTrue(sourceArray){
    const reducer = function (accumulator, currentValue) {
        if (!!accumulator == true && !!currentValue == true) {
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    const reducer = function (accumulator, currentValue) {
        if (accumulator == true) {
            return true;
        } else {
            return !!currentValue       }
    }
    return sourceArray.reduce(reducer, false)
}


