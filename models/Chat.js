var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@chatappv001.ntxyj.mongodb.net/dbnamechatappv001?retryWrites=true&w=majority');
var ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
