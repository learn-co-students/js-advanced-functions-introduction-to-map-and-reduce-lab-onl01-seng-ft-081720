function mapToNegativize(arr) {
    return arr.map(e => -Math.abs(e));
};

function mapToDouble(arr) {
    return arr.map(e => e * 2);
};

function mapToNoChange(arr) {
    return arr.map(e => e);
};

function mapToSquare(arr) {
    return arr.map(e => e * e);
};

function reduceToTotal(arr, start=0) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, start);
};

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
};