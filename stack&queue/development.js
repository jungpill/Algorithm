function solution(progresses, speeds) {
    var answer = []
    let count = 0;
    let i = 0;
    
    const addSpeeds = () => {
        for(let j = i; j < speeds.length ; j++){
            progresses[j] += speeds[j]
        }
    }
    
    while(true){
        if(progresses[i] >= 100){
            count++
            i++
        }else{
            if(count > 0) answer.push(count)
            count = 0;
            addSpeeds()
        }
        if( i === progresses.length){
            answer.push(count) 
            break
        }
    }
    
    return answer
}