function mapToNegativize(arr) {
    return arr.map(int => int * -1)
}

function mapToNoChange(arr) {
    return arr.map(value => value)
}

function mapToDouble(arr) {
    return arr.map(value => value * 2)
}

function mapToSquare(arr) {
    return arr.map(value => value ** 2)
}

function reduceToTotal(arr, start=0) { 
    return arr.reduce(function(total, element) {
        return total + element}, start)
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (!arr[i]) {
          return false;
      }
    }
    return true;
};

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i]) {
            return true;
        }
      }
    return false;
}