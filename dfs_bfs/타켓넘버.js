function solution(numbers, target) {
    let queue = [0]
    let result = 0
    
    for(let i = 0; i < numbers.length; i++){
        const nextQueue = []
        
        for(let j =0; j < queue.length; j++){
            nextQueue.push(queue[j] + numbers[i])
            nextQueue.push(queue[j] - numbers[i])                
        }
        queue = nextQueue
    }
    
    for(let k of queue){
        if(k === target) result++
    }
    
    return result
}