const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
})

client.stream('statuses/filter', {track: '#뉴스'}, function (stream) {
  stream.on('data', function (tweet) {
    const date = new Date(parseInt(tweet.timestamp_ms))
    console.log('===========================')
    console.log(`${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`)
    console.log(tweet.text)
    console.log('===========================')
  })

  stream.on('error', function (error) {
    console.log(error)
  })
})
