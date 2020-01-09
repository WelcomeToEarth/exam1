//dao/BookDao.js v1
const mongoose = require('mongoose')

let ablumSchema = new mongoose.Schema({
        album_id: Number,
        album_name: String,
        public_time: String,
        week: Number,
        price: Number,
        cover: String,
        singers: []
    })
    // let ablumSchema = new mongoose.Schema({
    //     data: Array
    // })
let ablumsModel = mongoose.model("ablum", ablumSchema)

function saveData(list) {
    ablumsModel.insertMany(list, { ordered: true })
        .then()
}

module.exports = { saveData }