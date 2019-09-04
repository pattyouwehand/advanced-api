const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres', { logging: false });


const Message = sequelize.define('new_message', {   //the model name || schema
  body: Sequelize.TEXT,                             //attributes
  //line_count: Sequelize.INTEGER
 });

sequelize.sync() // Calling sync creates the table if it does not already exist
    .then(() => Message.create({ body: `This message was created at ${new Date()}`, line_count: 1 }))
    .then(() => Message.findAll())
    .then(messagesArray => console.log("All messages: ", messagesArray.map(m => m.dataValues)))
    .catch(err => console.error(err))


    
