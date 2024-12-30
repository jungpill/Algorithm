function solution(s, skip, index) {
    const result = [];
    let i = 0;
    let ascii = s[i].toLowerCase().charCodeAt()
    let temp = index
    
    while(true){
        if(ascii === 122) { ascii = 96}
        if(skip.includes(String.fromCharCode(ascii + 1))){
            ascii+=1
        }else{
            ascii+=1
            index-=1
        }
        if(index === 0){
            result.push(String.fromCharCode(ascii))
            index = temp;
            i+=1;
            if (i < s.length) { 
                ascii = s[i].toLowerCase().charCodeAt();
            } else {
                break;
            }
        }if(i === s.length){
            break;
        }
    }
    
    return result.join('');
}