function solution(citations) {
    citations.sort((a,b) => a - b)
    var result = 0
    
    for(let i = 0; i < Math.max(...citations); i++){
        var temp = citations
        var count = 0
        for(let j = 0; j < citations.length; j++){
            if(citations[j]>= i) count++
        }
        if(count >= i) result = i
    }
    return result 
}