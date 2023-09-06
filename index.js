const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
     res.send('Hello world');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // run using - node index.js  http://localhost:4000/