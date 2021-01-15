const fs = require('fs')
const pwdFunction = require('./pwd')

module.exports = (file) => {
  // const pathway = path.resolve(__dirname, file)
  console.log(fs.readFile(pwdFunction(), (err, data) => {
    if (err) throw err
    console.log(data)
  })
 )
}
