const mongoose = require('mongoose');
//Modelo del usuario
const userSchema = new mongoose.Schema({
username: { type: String, required: true },
password: { type: String, required: true },
email: { type: String, required: true, unique: true }
});
//Equivalente a una clase en java
const User = mongoose.model('User', userSchema);

module.exports = User;