/* 
기존 방식

function solution(want, number, discount) {
    var result = 0
    var total = 0
    var list = {} 
    const temp = discount.length
    
    for(let i = 0; i < number.length; i++){
        list[want[i]] = number[i]
        total += number[i]
    }
    
    for(let i = 0; i < temp - total; i++){
        var hashMap = new Map()
        for(let j = 0; j < total; j++){
            if(hashMap.has(discount[j])){
                hashMap.set(discount[j],hashMap.get(discount[j])+1)
            }else hashMap.set(discount[j],1)
        }
        const obj = Object.fromEntries(hashMap);
        
        if(JSON.stringify(Object.entries(obj).sort()) === 
            JSON.stringify(Object.entries(list).sort())){
            result = i
        }
        discount.shift()
    }
    
    return result
}
    제출시 실패 시간이유라고 나오지 않았지만 시간복잡도가 안좋아서 실패 하던겨였음

*/


function solution(want, number, discount) {
    let result = 0;
    const wantMap = new Map();
    const windowMap = new Map();
    const totalDays = 10; // 무조건 10일 기준

    // 원하는 물품 목록을 Map으로 저장
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    // 초기 10일 윈도우 세팅
    for (let i = 0; i < totalDays; i++) {
        windowMap.set(discount[i], (windowMap.get(discount[i]) || 0) + 1);
    }

    // 두 Map을 비교하는 함수
    const isValid = () => {
        for (const [key, val] of wantMap) {
            if (windowMap.get(key) !== val) return false;
        }
        return true;
    };

    if (isValid()) result++;

    // 슬라이딩 윈도우 이동
    for (let i = totalDays; i < discount.length; i++) {
        // 윈도우에서 벗어나는 값 제거
        let prevItem = discount[i - totalDays];
        if (windowMap.get(prevItem) === 1) {
            windowMap.delete(prevItem);
        } else {
            windowMap.set(prevItem, windowMap.get(prevItem) - 1);
        }

        // 새롭게 들어오는 값 추가
        let newItem = discount[i];
        windowMap.set(newItem, (windowMap.get(newItem) || 0) + 1);

        if (isValid()) result++;
    }

    return result;
}