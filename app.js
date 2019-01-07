const express = require("express")
const app = express()
const port = 3000
const db = require("./utills/db_connect")

var d = new db.DB("hello")

console.log(d.path)

d.connect_db()
console.log(d.db)
d.db_readall()
d.dissconect_db()
console.log(d.db)
d.db_readall()




app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/bootstrap_sandbox",(req,res) => {
    console.log(req.params)
    console.log(res.params)
    res.render("bootstrap_sandbox")
})

app.get("/js_sandbox",(req,res) => {
    res.render("js_sandbox")
})

app.get("/presentations",(req,res) => {
    res.render("presentations")
})

// Presentation routes

app.get("/presentations/NLB/nlb_ann",(req,res) => {
    res.sendFile("presentations/NLB/index.html",{root:__dirname+'/public/'})
})



server = app.listen(port, () =>console.log(`Example app listening on port ${port}!`))


