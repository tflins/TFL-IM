/**
 * Created by tflin on 2019/04/1.
 */

const api = require('../controller/apiList');
let express = require('express');
let router = express.Router();

router.post('/getExpression', api.getExpression); // 获取表情库


module.exports = router;