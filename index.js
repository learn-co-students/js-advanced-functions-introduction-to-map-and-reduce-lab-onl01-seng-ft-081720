const mapToNegativize = sourceArray => {
    const newSource = []
    for(const e of sourceArray) {
        newSource.push(e  * -1)
    }
    return newSource
}

const mapToNoChange = sourceArray => {
    return sourceArray
}

const mapToDouble = sourceArray => {
    const newSource = []
    for(const e of sourceArray) {
        newSource.push(e  * 2)
    }
    return newSource
}
const mapToSquare = sourceArray => {
    const newSource = []
    for(const e of sourceArray) {
        newSource.push(e  ** 2)
    }
    return newSource
}

const reduceToTotal = (sourceArray, startingPoint=0) =>  {
    let val = startingPoint || 0
    for(const e of sourceArray) {
        val += e
    }
    return val
}

const reduceToAllTrue = sourceArray => {
    for (const e of sourceArray) {
        if (!e) {
            return false
        }
    }
    return true
}
const reduceToAnyTrue = sourceArray => {
   for (const e of sourceArray) {
       if (e) {
           return true
       }
   }
   return false
}