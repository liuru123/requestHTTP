/**
 * Created by liuru on 16-7-29.
 */
const CreateAction = require('./RouterAction.js');
const btp = require('../routes/BarcodeTransformPost.js');
const request = require('superagent');

const name = `InputBarcode`;
const help = ``;
class InputBarcode extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case 'b': {
                return 'BarcodeTransformPost';
            }
            case 'q':
                process.exit(0);
            default: {
                request
                    .post('localhost:3000/BarcodeTransformPost')
                    .type('form')
                    .send({barcode:cmd})
                    .end((err,res)=>{
                        if(res.ok){
                            console.log(JSON.stringify(res.body));
                        }else {
                            console.log('oh error');
                        }
                    });
                return 'BarcodeTransformPost';
            }
        }
    }
}
module.exports = new InputBarcode(name, help);
