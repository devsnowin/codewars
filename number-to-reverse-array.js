/* 
 Given a random non-negative number, you have to return 
 the digits of this number within an array in reverse order.
*/

function digitize(n) {
    let result = []
    const number = n.toString()

    for(let i=0; i< number.length; i++){
        result[i] = parseInt(number[i])
    }

    return result.reverse()
}

console.log(digitize(0));
