function solution(s) {
    const temp = s.split(' ')
    const result = []

    result[0] = Math.min.apply(null,temp)
    result[1] = Math.max.apply(null,temp)
    return result.join(' ')
}