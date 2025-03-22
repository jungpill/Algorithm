function solution(schedules, timelogs, startday) {
    var result = 0;
    var today = startday
    
    for(let i = 0; i < timelogs.length; i++){
        let count = 0
        for(let j = 0; j < timelogs[i].length; j++){
            let temp = timelogs[i][j] - schedules[i]
            
            if(temp <= 10 || today === 6 || today === 7){
                count++
            }else if(temp >= 40 && temp <= 50 &&
                    Math.floor(timelogs[i][j] / 100) !== 
                    Math.floor(schedules[i] / 100)){
                 count++         
            }
            if(today === 7) today = 0
            today++
        }
        if(count === 7){
            result++
        }
    }
    
    return result;
}