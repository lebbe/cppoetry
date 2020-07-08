const poem = require('./index.js').onlyText

document.querySelector('.poem').innerHTML = poem().join('<br>')
