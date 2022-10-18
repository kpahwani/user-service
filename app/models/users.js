let mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    type: String,
    required: true,
    default: () => Date.now()
  },
  deletedAt: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Users', usersSchema);
