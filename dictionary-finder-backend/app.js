//dependencies
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      env = require('dotenv'),
      PORT = process.env.PORT || 3000;
const app = express();

//hook up morgan
app.use(morgan('dev'));

//hook up cors
app.use(cors());

//hook up environment variables
env.config();

//hook up body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//hook up router
app.use(require('./router'));

app.listen(PORT, ()=>{
  console.log(`LIVE ON PORT ${PORT}`)
})
