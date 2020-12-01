function mapToNegativize(arr){
    let newArr = arr.map(function(arr){
        return arr * -1
    })
    return newArr
}

function mapToNoChange(arr){
    let newArr = arr.map(function(arr){
        return arr
    })
    return newArr
}

function mapToDouble(arr){
    let newArr = arr.map(function(arr){
        return arr * 2
    })
    return newArr
}

function mapToSquare(arr){
    let newArr = arr.map(function(arr){
        return arr * arr
    })
    return newArr
}

function reduceToTotal(arr, startingPoint){
    let total = startingPoint || 0
    for(const dig of arr){
        total+=dig
    }  
    return total
}

function reduceToAllTrue(arr){
    // [ 1, 2, true, 'razmatazz' ]
    for(const dig of arr){
      if(!dig)
        return false
    }
    return true
    
}

function reduceToAnyTrue(arr){  
    for(const dig of arr){
        if(dig)
          return true
      }
      return false
  }
  
