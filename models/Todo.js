var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String
});

module.exports = mongoose.model('Todo', TodoSchema);
 
/**
 * Module dependencies.
 * Good to See back
 */

/**
 * 
 * Release_2.1 Changes
 * Release_2.2 Changes
 * Release_2.3 Changes
 * Release_2.4 Changes
 * Release_2.5 Changes
 * 
 */
