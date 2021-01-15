const pwdFunc = require('./pwd')
const lsFunc = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data',(data)=>{
    const cmd=data.toString().trim();
    if(cmd==='pwd'){
        pwdFunc()
    }
    else if (cmd==='ls'){
      lsFunc()
    }
    else if (cmd.includes('cat')){
      cat(cmd.slice(4))
    }
     else{
        process.stdout.write('You typed: '+cmd);
    }
    process.stdout.write('\nprompt> ');

})



