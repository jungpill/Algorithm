function solution(order) {
    let index = 0;
    let stack = [];
    let list = [];
    let head = 0;

    for (let i = 0; i < order.length; i++) {
        list.push(i + 1);
    }

    while (index < order.length) {
        if (head < list.length && order[index] === list[head]) {
            index++;
            head++;
        } else if (stack.length > 0 && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
        } else if (head < list.length) {
            stack.push(list[head]);
            head++;
        } else {
            break;
        }
    }

    return index;
}