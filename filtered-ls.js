var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
}) 











// const fs = require('fs')
// const path = require('path')

// let folder = process.argv[2]
// let ext = '.' + process.argv[3]

// fs.readdir(folder , function (err ,files){
//     if(err) return console.error(err)
//     files.forEach(function(file){
//         if(path.extname(file === ext){
//             console.log(file)
//         }
//     })
// })