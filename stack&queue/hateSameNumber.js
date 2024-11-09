function solution(arr)
{
    const result = []
    for(let i = 1; i <= arr.length; i++){
        if(arr[i] != arr[i - 1]){
            result.push(arr[i - 1])
        }
    }
    return result
}