'use strict';

const express = require('express');

const app = express();

app.get('/gingerkisses', function(){
  console.log('ginger');
  Response.send('')
});

app.listen(3000, function() {
  console.log('3000');
});

