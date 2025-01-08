function solution(people, limit) {
    
    const bodyWeight = people.sort((a,b) => a - b)
    let start = 0
    let end = people.length - 1
    let result = 0
    
    while(start <= end){
        if(limit >= (bodyWeight[start] + bodyWeight[end])){
            start++
        }
        result++
        end--
    }
    
    return result;
}
// gpt 도움 받아서 품 