function solution(s)
{   
    let result = 0
    const stack = []
    
    for(let k of s){
        if(stack.length > 0 && stack[stack.length - 1] === k){
            stack.pop()
        }
        else stack.push(k)
    }
    
    stack.length === 0 ? result = 1 : result = 0
    return result
    
}