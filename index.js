function   mapToNegativize(array){
  return array.map(e => e * -1)
}

function mapToNoChange(array){
    return array.map(e => e )
}

function mapToDouble(array){
    return array.map(e => e * 2 )
}

function mapToSquare(array){
    return array.map(e => e ** 2)

}

function reduceToTotal(array, start = 0){
    const reducer = function(acc,value){
        return acc + value 
    }
    return array.reduce(reducer,start)

}

function reduceToAllTrue(array){
    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return array.reduce(reducer, true)


}
function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
}