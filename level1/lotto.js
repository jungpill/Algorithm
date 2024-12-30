function solution(lottos, win_nums) {
    let result = [6,6];
    let accord = 0;
    let count = 0

    lottos.sort()

    for(let k of win_nums){
         if(lottos.includes(k)) accord++
    }

    for(let i =0; i < 6; i++){
        if(lottos.includes(0)){
            count++
            lottos.shift()
        }
    }

    if(count + accord >= 2){
        result[0] = 6 - (count + accord) + 1
    }

    if(accord >= 2){
        result[1] = 6 - accord + 1
    }

    return result;
}
