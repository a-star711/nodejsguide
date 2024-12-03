const {readFile, writeFile, write} = require('fs')

console.log('1')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }

  const first = result;
  readFile('./content/second.txt', 'utf8',  (err,result) => {
    if(err){
      console.log(err)
      return
    }
    const second = result;
    writeFile('./content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err,result)=>{
        if(err){
          return;
        }
        console.log('done with the task')
      })
  })

})
console.log('starting next one')