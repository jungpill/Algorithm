function solution(n, words) {
    
    let stack = []
    let turn = 1
    let count = 0
    
    for(let i = 0; i < words.length; i++){
        
        if(!stack.includes(words[i])){
            stack.push(words[i])
        }else return [i%n + 1, turn]
        
        if(i > 0 && stack[i][0] !== stack[i-1][stack[i-1].length - 1]){
            return [i%n + 1, turn]
        }
        
        if ((i + 1) % n === 0) turn++;
    }
    
    return [0,0]
}