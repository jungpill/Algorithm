//해시맵 방식으로 풀이

function solution(X, Y) {
    const hashX = new Map()
    const result = []
    
    for(let k of X){
        if(hashX.has(k)) hashX.set(k, hashX.get(k) + 1)
        else hashX.set(k, 1)
    }
    
    for(let k of Y){
        if(hashX.has(k) && hashX.get(k) > 0){
            result.push(k)
            hashX.set(k, hashX.get(k) - 1 )
        }
    }
    result.sort((a,b) => b - a);
    if(result.length === 0) return "-1"
    else if(result[0] === "0") return "0"
    
    return result.join('')
}