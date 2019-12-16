const mongoose = require('mongoose');

// Consts
const { Schema } = mongoose;

const adminShema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
});


const AdminModel = mongoose.model('admins', adminShema);

module.exports = AdminModel;