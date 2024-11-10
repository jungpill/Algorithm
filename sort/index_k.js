const result = []
    
    for(let i = 0; i < commands.length ; i++){
        
result.push(array.slice(commands[i][0]-1, commands[i][1]).sort()[commands[i][2]-1])
       
    }