function solution(n) {
    
    let result = 0
    let addNumber = 0
    let i = 1
    let temp = 0
    
    while(true){
        if(addNumber === 0) temp = i + 1
        addNumber += i
        i++
        if(addNumber === n){
            result += 1
            addNumber = 0
            i = temp
        }else if(addNumber > n){
            addNumber = 0
            i = temp
        }
        if(temp > n ) break
    }
        
    return result
}