// Your code here
function mapToNegativize(array){
    return array.map(el => el * -1)
} 

// returns an array with all values made negative
// 1) transforms correctly


function mapToNoChange(array){
    return array.map(el => el)
} 

// returns an array with the original values
// 2) transforms correctly


function mapToDouble(array){
    return array.map(el => el * 2)
} 

// returns an array with the original values multiplied by 2
// 3) transforms correctly


function mapToSquare(array){
    return array.map(el => el*el)
} 

// returns an array with the original values squared
// 4) transforms correctly




function reduceToTotal(array, startingPoint=0){
    return array.reduce(function(startingPoint, num){
        console.log(startingPoint, num)
        return startingPoint + num;
    }, startingPoint)
} 

// returns a running total when not given a starting point
// 5) reduces correctly




// returns a running total when given a starting point
// 6) reduces correctly


function reduceToAllTrue(array){
    return array.reduce(function(boolean, element){
        if (!element){
            return boolean = false
        } else {
            return boolean = true
        }
    }, true)
} 



// returns true when a true value is present
// 9) reduces correctly


function reduceToAnyTrue(array){
    return array.reduce(function(boolean, element){
        if (element) {
            return boolean = true
        } else {
            return boolean = false
        }
    })
} 

// returns false when no true value is present
// 10) reduces correctly


