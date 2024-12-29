function solution(s) {
    if(s.length === 4 || s.length === 6){
        for(let k of s){
            if(isNaN(k)) return false
        }
            return true
    }else{
        return false
    }
}