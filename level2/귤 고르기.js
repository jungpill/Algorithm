function solution(k, tangerine) {
    const hashMap = new Map()
    
    for(let i of tangerine){
        if(hashMap.has(i)) hashMap.set(i, hashMap.get(i) + 1)
        else hashMap.set(i,1)
    }
    
    const test = [...hashMap.values()].sort((a,b) => b - a)
    
    let count = 0;
    
    for(let i of test){
        k = k - i;
        count++
        if(k <= 0) break
    }
    
    return count
}