function solution(k, dungeons) {
   
    let temp = k
    let visited = Array(dungeons.length).fill(false)
    let result = 0
    
    function dfs(p, l){
        
        for(let i =0; i < dungeons.length; i++){
            if(p >= dungeons[i][0] && !visited[i]){
                visited[i] = true 
                dfs(p - dungeons[i][1], l + 1)
                visited[i] = false
            }   
            result = Math.max(result, l);
        }
        
    }
    
    dfs(k,0)
    return result
}