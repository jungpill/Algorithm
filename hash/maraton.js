
//해시 map을 적용하지 않고 풀이한 방법 
const maraton = (participant,completion) => {
    participant.sort();
    completion.sort();
    for(let i = 0 ; i < participant.length ; i++){
        if(participant[i] !== completion[i] ){return participant[i]}
    }
    
    
}

//해시 개념을 사용하여 해결한 방법
const solution = (participant, completion) => {
    const participantCount = {};

    for(let i of participant){
        if(participantCount.has(i)){
            participantCount.set(i , participantCount.get(i) + 1)   
        }else{
            participantCount.set(i,1)
        }
    }

    for(let i of completion){
        if(participantCount.has(i)){
            participantCount.set(i , participantCount.get(i) - 1)   
        }
    }

   for(let i of participant){
        if(participantCount.get(i) > 0){
            return i
        }
   }
}