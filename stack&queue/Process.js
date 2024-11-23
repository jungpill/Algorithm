
function solution(priorities, location) {
    let temp = priorities.indexOf(Math.max.apply(null,priorities))
    let count = 0

    while(true){
        if(Math.max.apply(null,priorities) === priorities[temp]){
        if(temp === location){
        count++
        break
        }else{
            priorities[temp] = 0
            temp++
            count++
            console.log(priorities)
        }
    }else if(temp >= priorities.length){
        temp = 0
    }else{
        temp++
    }
    }


    return count
}