// Complete the solution so that it reverses the string passed into it. 

function solution(str){
    let reversedString = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversedString += str[i]
    }
    return reversedString
}

function solution(str){
    const arrayInput = Array.from(str)
    let left = 0;
    let right = arrayInput.length - 1

    while(left < right){
        const temp = arrayInput[left]   //used to store the swap letter
        arrayInput[left] = arrayInput[right]    // assigning the first char to last
        arrayInput[right] = temp    // restoring the first letter

        left += 1;
        right -= 1;
    }

    return arrayInput.join('')
}

console.log(solution("hello"));
