
//테스트 통과 했지만 효율성에서 탈락한 방법 
//해시 문제이지만 해시 방법을 사용하지 않음 
const maraton = (participant,completion) => {
    var answer = '';
    let i = 0;
    participant.sort((a, b) => a.localeCompare(b));
    completion.sort((a, b) => a.localeCompare(b));
    
    while(true){
        if(completion.includes(participant[0])){
            participant.splice(0,1)
            completion.splice(0,1)
        }else{
            break
        }
    }
    
    return participant[0]
}

const solution = (participant, completion) => {
    const participantCount = {};

    for (let p of participant) {
        participantCount[p] = (participantCount[p] || 0) + 1;
    }

    
    for (let c of completion) {
        participantCount[c]--; 
    }

    
    for (let p in participantCount) {
        if (participantCount[p] > 0) {
            return p; 
        }
    }
}