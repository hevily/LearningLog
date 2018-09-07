// 把读取到内存中，然后再储存
const fs = require('fs')
const copy = (src,dst) => {
    fs.writeFileSync(dst,fs.readFileSync(src))
}
const main1 = (argv) => {
    copy(argv[0],argv[1])
}
// main1(process.argv.slice(2))
// node index 'index.js' 'index2.js'

// 拷贝大文件,通过数据流传递
const copyBig = (src, dst) => {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}
const main2 = (argv) => {
    copyBig(argv[0], argv[1])
}
// main2(process.argv.slice(2))

// fsPromises
const fsPromises = require('fs').promises
const copyPromise = (src,dst) => {
    fsPromises.copyFile(src,dst).then(() => {
        console.log('拷贝成功')
    }).catch(() => {
        console.log('拷贝失败')
    })
}
const main3 = (argv) => {
    copyPromise(argv[0], argv[1])
}
main3(process.argv.slice(2))