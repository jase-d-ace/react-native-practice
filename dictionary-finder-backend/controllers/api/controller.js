const controller = {};
const axios = require('axios')

controller.wordlist = (req, res) =>{
  axios({
    method: 'get',
    url: `https://od-api.oxforddictionaries.com/api/v1/wordlist/en/regions=us?prefix=${req.body.word}`,
    headers: {
      "app_id": process.env.DICTIONARY_APP_SECRET,
      "app_key": process.env.DICTIONARY_API_KEY
    }
  }).then((data) =>{
    let cleanData = data.data.results.filter((result) =>{
      //negated character class /[^whatever]/ takes out anything that doesn't match the character class given.
      //in this case, i'm looking for anything that isn't a letter
      return result.word.search(/[^a-zA-Z]/) === -1
    })
    res.json(cleanData)
  }).catch((error) =>{
    console.log('axios error: ', error)
  })
}

controller.synonyms = (req, res) =>{
  axios({
    method: 'get',
    url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${req.body.match}/synonyms`,
    headers: {
      "app_id": process.env.DICTIONARY_APP_SECRET,
      "app_key": process.env.DICTIONARY_API_KEY
    }
  }).then((data) =>{

  })
}

module.exports = controller;
