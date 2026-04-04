function solution(brown, yellow) {
    const total = brown + yellow 
    let x = 0
    let y = 0
    
    // 직사각형 내의 공간의 넓이를 구한 뒤 
    // 그 공간과 노란색의 크기가 맞다면 return 
    for(let i =1; i < brown/2; i++){
        x = brown / 2 - i
        y = total / x
        if(x * y === total && (x  - 2) * (y - 2) === yellow) break
    }
    
    return [x,y]
}