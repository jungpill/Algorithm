function solution(number,k){
   
    let temp = number.split('')
    let i = 0
    const stack = []
    
    for(let i =0; i < number.length; i++){
        
        while(temp[i] > stack[stack.length - 1] && k > 0){
            stack.pop()
            k--
        }
        
        stack.push(number[i])
    }
    stack.splice(number.length - k, k);
    return stack.join('')
}
