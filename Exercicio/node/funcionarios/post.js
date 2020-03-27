const axios = require('axios');

const url = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=8be231971ded7f1454ad485fcd1f259b162dd1e6'

async function makePostRequest() {

    let res = await axios.post(url);

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    console.log(`Data: ${res.data}`);
}

makePostRequest();