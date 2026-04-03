function solution(maps) {
    
    const n = maps.length -1 
    const m = maps[0].length - 1
    const queue = [[0,0]]
    
    const directions = [
            [1, 0], 
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
    
    function check(x,y){
        if(x < 0 || x > n || y < 0 || y < 0) return false
        
        if (maps[x][y] === 0) return false
            
        return true
    }
    
    while(queue.length){
        
        let [x,y] = queue.shift()
        
        if(x === n && y ===m){
            console.log(maps)
            return maps[x][y]
        }
        
        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            if (check(nx, ny) && maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return -1    
}