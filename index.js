function mapToNegativize(array){
    let newArr = array.map(x => x * -1)
    return newArr
}

function mapToNoChange(arr){
    let x = arr
    return x
}

function mapToDouble(arr){
    let x = arr.map(y => y * 2)
    return x
}

function mapToSquare(arr){
    let x = arr.map(y => y * y)
    return x
}

function reduceToTotal(arr, int = 0){
    let z = [int, ...arr]
    return z.reduce((x,y) => x += y)
}

function reduceToAllTrue(arr){
    let y = arr.every(x => x)
    return y
}

function reduceToAnyTrue(arr){
    let y = arr.some(x => x)
    return y
}