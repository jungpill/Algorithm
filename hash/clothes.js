
function solution(clothes) {
    let hl = new Map()
    let result = 1

    for(let [_,test] of clothes){
        if(hl.has(test)) hl.set(test,hl.get(test) + 1)
        else hl.set(test,1)
    }

    for(let i of hl.values()){
        result *= (i + 1)
    }

    return result - 1

}