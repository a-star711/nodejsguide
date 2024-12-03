const {readFile, writeFile} = require('fs').promises // shorter way

// const { promisify } = require('util');

// const writeFilePromise = promisify(fs.writeFile);
// const readFilePromise = promisify(fs.readFile);

// const getText = (path) => {
//   return new Promise((resolve,reject) => {
//     readFile(path, 'utf8', (err,data) => {
//       if(err){
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }


const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');


    await writeFile(
      './content/result-mind-grenade.txt',
      `This is awesome: ${first} ${second}`,
      {flag : 'a'} 
    );
    console.log(first, second); 
  } catch (error) {
    console.log(error); 
  }
};

start();

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))



