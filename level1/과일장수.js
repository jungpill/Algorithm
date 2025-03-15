/* 
시간복잡도로 인한 실패 케이스
function solution(k, m, score) {
    var totalBox = (score.length / m)
    let result = 0
    score.sort((a,b) => a - b)
    score.splice(0, score.length % m)
    
    for(let i = 0; i < Math.floor(totalBox); i++){
        var temp = []
        for(let j =0; j < m; j++){
            temp.push(score[0])
            score.splice(0,1)
        }
        result += Math.min(...temp)
    }
    return result * m
}
    */


function solution(k, m, score) {
    var totalBox = (score.length / m)
    let result = 0
    var temp = []
    score.sort((a,b) => a - b)
    score.splice(0, score.length % m)
    const copyScore = score.length
    
    for(let i = 0; i < copyScore; i++){
        temp.push(score[i])
        if((i + 1) % m === 0){
            result += Math.min(...temp)
            temp = []
        }
    }
    

    return result * m
}