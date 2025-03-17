function solution(s) {
    var result = 0
    var count = 0
    const stack = []
    s = [...s]
    
    for(let i = 0; i < s.length; i++){
        for(let k of s){
            if(k === '[' || k === '{' || k === '(') stack.push(k)
            else{
                if(stack.length === 0) break
                const top = stack.pop()
                if(top === '[' && k === ']') count++
                if(top === '{' && k === '}') count++
                if(top === '(' && k === ')') count++
            }
        }
        const temp = s[0]
        s.shift()
        s.push(temp)
        if(count === s.length / 2) result++
        count = 0
    }
    return result
}