// Your code here
const mapToNegativize = arr => {

    const ngtvNums = arr.map(x => x * -1)
    return ngtvNums
}

const mapToNoChange = arr => {
    return arr
}

const mapToDouble = arr => {
    const byTwo = arr.map(x => x * 2)
    return byTwo
}

const mapToSquare = arr => {
    const sqrd = arr.map(x => x ** 2)
    return sqrd
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let value = startingPoint 
    for (const e of sourceArray){
         value += e
    }
    return value
}

const reduceToAllTrue = sourceArray => {
    for(const e of sourceArray){
        if (!e){
            return false
        } 
    }
            return true
}

const reduceToAnyTrue = sourceArray => {
    for(const e of sourceArray) {
        if (e) {
            return true
        }
    }
    return false
}