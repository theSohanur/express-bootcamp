const express = require('express');
const app = express();

//Use Handelbars
const exphbs  = require('express-handlebars');
app.engine('.hbs', exphbs({extname: '.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');

//Use Body
app.use(express.urlencoded({ extended:true }))



app.get('/:name', (req,res)=>{
    //res.send(`<h1>Hello Express!</h1>`)
    
    //res.send(`<h1>My name is ${req.params.name}</h1>`)
   // res.json(req.query)
    res.render('index',{
        name:req.params.name
    })

    /* send(`
    <form action="/" method="post">
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="age" placeholder="Age"/>
        <button>Send</button>

    </form>
    `) */

})

app.post('/',(req,res)=>{
    res.send(
        'Your name is '+req.body.name +' and your age is '+req.body.age
    )
})

app.listen('3000',()=>{
    console.log("server is running.")
})