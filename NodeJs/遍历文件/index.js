// Path
const Path = require('path')
const cache = {}
const store = (key,value) => {
    cache[Path.normalize(key)] = value
}

store('foo///..bar/',1) 
// Path.normalize解析路径中.和..还能去掉多余的斜杠
console.log('cache===',cache)