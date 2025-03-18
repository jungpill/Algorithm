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
}
    
해결: if(cacheMemory.length >= cacheSize) cacheMemory.shift()로 인해서 이미 배열에서 값이 한번 삭제되고 
else if(cacheSize !== 0 && cacheMemory.includes(cities[i])) 해당 조건을 만족하며 한번 더 삭제돼서 발생하던 문제였음 

*/


function solution(cacheSize, cities) {
    var cacheMemory = []
    var result = 0
    
    if (cacheSize === 0) return cities.length * 5
    
    for(let i =0; i < cities.length; i++){
        cities[i] = cities[i].toLowerCase()
        if(cacheMemory.includes(cities[i])) result++
        else result += 5
        
        if(cacheMemory.length >= cacheSize && !cacheMemory.includes(cities[i])) 
            cacheMemory.shift()
        
        if(!cacheMemory.includes(cities[i])){
            cacheMemory.push(cities[i])
        }else{
            cacheMemory.splice(cacheMemory.indexOf(cities[i]),1)   
            cacheMemory.push(cities[i])
        }
    }
    return result;
}