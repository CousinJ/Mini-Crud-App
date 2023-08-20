

const express = require('express');
const  cors = require('cors');

const app = express();
const port = 3008;



app.use(cors());
app.use(express.json())

app.post('/createText', (req, res) => {

  //data to work with here (req)  
  const text = req.body.text;
    console.log(`${text} text data is now in the server!`)
    res.status(200).send(`${text} was reveived successfully`)
})


app.listen(port, () => {
    console.log('Sever listening on port ' + port);
});