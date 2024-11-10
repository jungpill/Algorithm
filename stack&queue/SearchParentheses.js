function solution(s){
    var answer = true;
    let left = 0, right = 0
   for(let f of s){
       if(f === '(') left++
       else right++
       if(left < right) return false
   }
    if(left != right) return false

    return answer;
}