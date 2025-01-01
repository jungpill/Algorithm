function solution(s) {
    let del = 0
    let count = 0
    let temp = []
    let result = []
    let i = 0
    
    while(s !== '1'){
        if(s[i] === '1') temp.push('1')
        else del++
        
        i++
        
        if(s.length === i){
            i = 0
            count++
            s = temp.length.toString(2)
            temp = []
        }
    }
    result[0] = count
    result[1] = del
    
    return result
}