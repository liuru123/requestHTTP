/**
 * Created by liuru on 16-8-2.
 */
var request = require('sync-request');
function sendRequest(router,cmd) {

    let res = request('POST', 'localhost:3000/${router}', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'code=${cmd}'
    })
    console.log(res.getBody().toString());
}
module.exports = sendRequest;
