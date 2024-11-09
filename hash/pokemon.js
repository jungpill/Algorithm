function solution(nums) {
    const setNums = new Set(nums)
    const temp = [...setNums]
    let result = 0
    temp.length > nums.length / 2 ? result = nums.length/2 : result = temp.length
    
    return result
}