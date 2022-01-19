const fs = require('fs')
// reading files
/* fs.readFile('./docs/blog.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
console.log('Maro') */
// write files
/* fs.writeFile('./docs/blog2.txt', 'Ola Maro', ()=>{
    console.log('Ficheiro foi escrito')
}) */
// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log("Directoria criada")
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Directoria removida")
    })
}

// delete files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Ficheiro deletado")
    })
}