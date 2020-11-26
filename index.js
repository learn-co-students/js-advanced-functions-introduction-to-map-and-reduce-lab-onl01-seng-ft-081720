// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item * item)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for(const item of sourceArray) {
        total = total + item
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for(const item of sourceArray) {
        if(!item) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(const item of sourceArray) {
        if(item) {
            return true
        }
    }
    return false
}