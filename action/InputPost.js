/**
 * Created by liuru on 16-7-29.
 */
const ptb = require('../routes/PostTransformBarcode.js');
const CreateAction = require('./RouterAction.js');
const request = require('superagent');

const name = `InputPost`;
const help = ``;
class InputPost extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case 'p':
                return 'PostTransformBarcode';
            case 'i':
                return 'InputPost';
            default:
                request
                    .post('localhost:3000/PostTransformBarcode')
                    .type('form')
                    .send({posts:cmd.trim()})
                    .end((err,res)=>{
                        if(res.ok){
                            console.log(JSON.stringify(res.body));
                        }else {
                            console.log('oh no error');
                        }
                    });
                return 'PostTransformBarcode';
        }
    }
}
module.exports = new InputPost(name, help);
