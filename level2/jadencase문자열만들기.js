function solution(s) {
    let answer = s.split(' ')
    const result = []
    
    for(let i = 0; i < answer.length; i++){
        if(answer[i][0]){
            let temp = answer[i][0].toUpperCase()
            result.push(temp + answer[i].slice(1).toLowerCase())
        }else{
            result.push('')
        }
    }
    
    return result.join(' ')
}