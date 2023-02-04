const express = require('express')
const path = require('path')
const app = express()
const { Configuration, OpenAIApi } = require("openai");
const bodyparser = require('body-parser') 
const port = 3000
const dotenv = require('dotenv')
dotenv.config()
app.use(express.static(__dirname + "/static/")); // For serving static files
app.use(express.urlencoded())
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'))
})
app.get('/data', async (req, res) => {

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: req.query.query,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
        console.log(response.data.choices[0].text)
        res.json(response.data.choices[0].text)
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'))
})

app.listen(port, () => {
  console.log(`Wren app listening on http://localhost:${port}`)
})
