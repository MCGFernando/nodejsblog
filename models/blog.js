const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Define a estrutura do Schema
const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})
//Define um modelo para o Schema. Deve ser o singular do Documento/Tabela do MongoBd
const Blog = mongoose.model('Blog', blogSchema)

//Expota o modulo para ser usado por outros modulos
module.exports = Blog