const http = require('http');
const mongoose = require('mongoose')

var albumDao = require('./model') // 导入DAO

//http://johnyu.cn:3000/albums
const options = {
    host: 'johnyu.cn',
    port: 3000,
    path: '/albums'
};

// 发出请求。
const req = http.request(options);
req.end();


req.on('response', (info) => {
    info.on('data', chunk => {
        // 获取数据
        console.log(chunk.toString());
        let data = chunk.toString()
            // let data = {
            //         "data": list
            //     }
            // 连接 并 写入数据库
        mongoose.connect("mongodb://39.100.123.183/albums", function(err) {
            console.log("阿里云mongodb已连接!")
            if (!err) {
                albumDao.saveData(data)
            }
        })

    })
});