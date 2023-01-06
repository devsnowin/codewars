/* Complete the square sum function so that it squares each number 
passed into it and then sums the results together. 
*/

function squareSum(numbers){
    let squareNumber = 0
    
    numbers.forEach(number => {
        squareNumber += (number ** 2)
    });

    return squareNumber
}

console.log(squareSum([1,2,2]));
