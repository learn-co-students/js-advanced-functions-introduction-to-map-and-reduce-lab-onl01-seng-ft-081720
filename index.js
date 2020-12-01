function mapToNegativize(array) {
    let newArray = []
    for(const num of array) {
        newArray.push(num * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let newArray = []
    for(const num of array) {
        newArray.push(num * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for(const num of array) {
        newArray.push(num * num)
    }
    return newArray
}

function reduceToTotal(array, start = 0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return true
        }
    }
    return false
}