const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/crud.txt`;
fs.writeFileSync(filePath,'Here I Create Crud With File System Operation');