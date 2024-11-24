function solution(prices) {
    let count = 0;
    let j = 1;
    let i = 0;
    const result = [];

    while(true){
        if(i === prices.length - 1) {
            result.push(0) 
            break
        }
        if(j === prices.length ){
            result.push(count)
            i++
            j = i + 1
            count = 0
        }
        if(prices[i] > prices[j]){
            count++
            result.push(count)
            i++
            j = i + 1
            count = 0
        }else{
            count++
            j++
        }
    }

    return result
}