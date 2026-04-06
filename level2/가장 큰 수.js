function compare(a,b){
    let strA = a.toString();
    let strB = b.toString();
    return (strB + strA) - (strA + strB);
}

function solution(numbers) {
    const sorted = numbers.sort((a,b) => compare(a,b));
    return Number(sorted.join("")) > 0 ? sorted.join("") : "0";
}