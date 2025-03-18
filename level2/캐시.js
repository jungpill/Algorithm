/*

사람들이 제시한 반례도 전부 성공하는데 65점만 나오는 코드
function solution(cacheSize, cities) {
    var cacheMemory = []
    var result = 0
    
    for(let i =0; i < cities.length; i++){
        cities[i] = cities[i].toLowerCase()
        if(cacheMemory.includes(cities[i])) result++
        else result += 5
        
        if(cacheMemory.length >= cacheSize) cacheMemory.shift()
        if(cacheSize !== 0 && !cacheMemory.includes(cities[i])){
            cacheMemory.push(cities[i])
        }else if(cacheSize !== 0 && cacheMemory.includes(cities[i])){
            cacheMemory.splice(cacheMemory.indexOf(cities[i]))   
            cacheMemory.push(cities[i])
        }
    }
    return result;
}*/