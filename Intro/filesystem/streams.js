const fs = require('fs')
// a opcao encode ja deixa a os pacotes da stream num formato legivel
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

//Event DATA é disparado sempre que recebemos um pacote de dados do stream
/* readStream.on('data', (chunk)=>{
    console.log('---------------- Novo Pacote ---------------')
    console.log(chunk)
    writeStream.write('\nNovo Pacote\n')
    writeStream.write(chunk)
    console.log('Fim')
}) */

//Piping - Forma de transferir dados de um readstream para um writestream
readStream.pipe(writeStream)
