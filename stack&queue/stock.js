
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
function solution(prices) {
    let count = 0;
    let j = 1;
    let i = 0;
    const result = [];

    while(true){
        if(i === prices.length - 1) {
            result.push(0) 
            break
        }
        if(j === prices.length ){
            result.push(count)
            i++
            j = i + 1
            count = 0
        }
        if(prices[i] > prices[j]){
            count++
            result.push(count)
            i++
            j = i + 1
            count = 0
        }else{
            count++
            j++
        }
    }

    return result
}