// Your code here
const mapToNegativize = (sourceArray)=> {
    let result= []
    for (const el of sourceArray){
        result.push(-1*el) 
    }
    return result
}

const mapToNoChange = (sourceArray)=> {
    let result= []
    for (const el of sourceArray){
        result.push(el) 
    }
    return result
}

const mapToDouble = (sourceArray)=> {
    let result= []
    for (const el of sourceArray){
        result.push(2*el) 
    }
    return result
}

const mapToSquare = (sourceArray)=> {
    let result= []
    for (const el of sourceArray){
        result.push(el**2) 
    }
    return result
}

const reduceToTotal= (sourceArray, startingPoint) =>{
    let result = startingPoint? startingPoint : 0; 
    for (const el of sourceArray){
        result += el 
    }
    return result
}

const reduceToAllTrue = (sourceArray) =>{
    for (const el of sourceArray){
       if (el === false) return false
    }
    return true
}

const reduceToAnyTrue = (sourceArray) =>{
    for (const el of sourceArray){
       if (el === true) return true
    }
    return false
}
