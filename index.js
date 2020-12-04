// Your code here
function mapToNegativize(srcArray) {
  let result = []
  for (let i = 0; i < srcArray.length; i++) {
    result.push(-1 * srcArray[i])
  }
  return result
}

function mapToNoChange(srcArray) {
  let result = []
  for(let i = 0; i < srcArray.length; i++) {
    result.push(srcArray[i])
  }
    return result
}

function mapToDouble(srcArray) {
  let result = []
  for(let i = 0; i < srcArray.length; i++) {
    result.push(2 * srcArray[i])
  }
  return result
}

function mapToSquare(srcArray) {
  let result = []
  for(let i = 0; i < srcArray.length; i++) {
    result.push(srcArray[i] * srcArray[i])
  }
  return result
}

function reduceToTotal(srcArray, startPoint=0) {
  let total = startPoint
  for(let i = 0; i < srcArray.length; i++) {
    total = total + srcArray[i]
  }
  return total
}

function reduceToAllTrue(srcArray) {
  for( let i = 0; i < srcArray.length; i++) {
    if(!srcArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(srcArray) {
  for( let i = 0; i < srcArray.length; i++) {
    if(srcArray[i]) return true
  }
  return false
}