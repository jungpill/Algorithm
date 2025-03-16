function solution(n,a,b)
{
    var result = 1;
    
    if((a % 2 === 0 && b % 2 === 1)  && a - b === 1){
            return result
    }else if((a % 2 === 1 && b % 2 === 0)  && b - a === 1){
        return result
    }
    
    for(let i = 0; i < n/2; i++){
        result++
        if(a % 2 === 0){
            a = a / 2
        }else a = Math.round(a / 2)
        if(b % 2 === 0){
            b = b / 2
        }else b = Math.round(b / 2)
        if((a % 2 === 0 && b % 2 === 1)  && a - b === 1){
            return result
    }else if((a % 2 === 1 && b % 2 === 0)  && b - a === 1){
        return result
    }
    }
    
    return result;
}