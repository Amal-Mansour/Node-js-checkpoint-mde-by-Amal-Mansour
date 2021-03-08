var fs = require('fs')  
 let contents =  process.argv[2]    

  fs.readFile(contents,'utf-8',function(err,contents){
    
      var lines = contents.toString().split('\n').length - 1  
      console.log(lines)
})  