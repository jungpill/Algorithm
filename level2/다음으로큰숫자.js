function solution(n) {
    let count = 0;
    n = n.toString(2).split('')
    let temp = parseInt(n.join(''),2) + 1
    
    for(let k of n){
        if(k === '1') count++
    }
    
    while(true){
        if(temp.toString(2).split('').filter((item) => item === '1').length === count){
            break
        }else temp++
    }
    
    return temp
}