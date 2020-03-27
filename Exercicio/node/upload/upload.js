var FormData = require('form-data');
var fs = require('fs');

const url = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=8be231971ded7f1454ad485fcd1f259b162dd1e6'



 
var form = new FormData();

form.append('encType', 'multipart/form-data');
form.append('type', 'file');
form.append('name', 'answer');
form.append('', fs.createReadStream('./answer.json'));


form.submit (url, function(err, res){
  console.log(res)
  console.log(res.statusCode)
  console.log(res.statusMessage)
})


