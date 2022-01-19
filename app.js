const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')
const app = express()
const dbURI = "mongodb://netninja:test1234@node-shard-00-00.02vk8.mongodb.net:27017,node-shard-00-01.02vk8.mongodb.net:27017,node-shard-00-02.02vk8.mongodb.net:27017/nodejsmongobd?ssl=true&replicaSet=atlas-c50oyj-shard-0&authSource=admin&retryWrites=true&w=majority"
//,{useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{console.log('Conectado a BD')})
.catch((err)=>console.log(err))
app.set('view engine', 'ejs')

app.listen(3000)

/* app.use((req, res, next)=>{
    console.log('New request made:')
    console.log('host:', req.hostname)
    console.log('path:', req.path)
    console.log('method:', req.method)
    next()
}) */

/* app.use((req, res, next)=>{
    console.log('In the next middleware')
    next()
}) */

//Third parts middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

/* app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title : 'New Blog',
        snippet : 'Sobre o meu novo Blog',
        body : 'Mais coisas sobre o meu novo blog'
    })

    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>console.log(err))
})

app.get('/all-blogs', (req, res)=>{
    Blog.find().then((result)=>{
        res.send(result)
    }).catch((err)=>console.log(err))
})

app.get('/single-blog', (req, res)=>{
    Blog.findById("61e5f62e213e1419068e717a").then((result)=>{
        res.send(result)
    }).catch((err)=>console.log(err))
}) */

app.get('/', (req, res)=>{
    /* const blogs = [
        {title:'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet, consectetur'},
        {title:'Mario finds stars', snippet:'Lorem ipsum dolor sit amet, consectetur'},
        {title:'How to defeat bowser', snippet:'Lorem ipsum dolor sit amet, consectetur'},
    ]
    res.render('index', {title:'Home', blogs}) */
    res.redirect('/blogs')
})
 
app.get('/about', (req, res)=>{
    res.render('about', {title:'About'})
})

app.use('/blogs',blogRoutes)

app.use((req, res)=>{
    res.status(404).render('404', {title:'404'})
})