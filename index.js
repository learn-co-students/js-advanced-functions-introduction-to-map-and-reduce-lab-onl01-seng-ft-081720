// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(n => -n)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(n => n)
}

function mapToDouble(sourceArray){
    return sourceArray.map(n => n * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(n => n * n)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    sourceArray.forEach(element => startingPoint += element)
    return startingPoint
}

function reduceToAllTrue(sourceArray){
    let final = []
    sourceArray.forEach(e => {
        if(!e){
            final.push(e)
        }
    });

    if(final.length > 0){
        return false
    }else{
        return true
    }
}

function reduceToAnyTrue(sourceArray){
    let final = []
    sourceArray.forEach(e => {
        if(!!e){
            final.push(e)
        }
    });
    
    if(final.length > 0){
        return true
    }else{
        return false
    }
}