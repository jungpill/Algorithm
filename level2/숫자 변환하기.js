function solution(x, y, n) {
   
    const queue = [[x,0]];
    const visited = Array(y+1).fill(false)
    visited[x] = 0
    let head = 0
    
     while (head < queue.length) {
        const [cur, count] = queue[head++];
        if(cur === y) return count
        
        const next1 = cur + n
        const next2 = cur * 2
        const next3 = cur * 3
        
        if(next1 <= y && !visited[next1]){
            visited[next1] = true
            queue.push([next1, count + 1]);
        }
        
        if(next3 <= y && !visited[next3]){
            visited[next3] = true
            queue.push([next3, count + 1]);
        }
        
         if(next2 <= y && !visited[next2]){
            visited[next2] = true
            queue.push([next2, count + 1]);
        }
    }
    
    return -1
}