
export function reverseString (str) {
    //将字符串转为数组
    // let arr = str.split('');
    let arr = [...str]
    //翻转数组
    arr.reverse()
    //将数组拼接成字符串
    let s = arr.join('')
    return s
}

export function palindrome (str) {
    return reverseString(str) === str
}


export function truncate (str, size) {
    if (size < str.length) {
        return str.slice(0, size) + '...'
    } else {
        return str.slice(0, size)
    }
}

//驼峰转下划线
export function toLine (str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}