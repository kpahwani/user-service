let mongoose = require('mongoose');

let followerSchema = new mongoose.Schema({
  followerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  followeeId: {
    type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('Followers', followerSchema);
