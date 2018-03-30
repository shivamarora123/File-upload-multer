const express = require('express')
const bodyParser = require('body-parser')

/* Global Path setup for easy require */
global.__base = __dirname + '/';
const DocumentRoutes=require('./modules/upload_doc.js');
//console.log(DocumentRoutes);
/* Express Instance */
const app = express()
app.use('/documents',DocumentRoutes);
const config = require(__base + 'system/config.js')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))
module.exports=app;
