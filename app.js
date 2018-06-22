require('dotenv').config()

const twit = require('twit');
const config = require('./config');


const Twitter = new twit(config.twitter);
// Likes Bot for Twitter ===============
// By @lauragift21

// find a random tweet and 'like' it
const likeTweet = () => {
    const params = {
        q: '#100DaysofCode',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    // for more parameters, see: https://dev.twitter.com/rest/reference
  
    // find the tweet
    Twitter.get('search/tweets', params, (err,data) => {
      // find tweets
      const tweet = data.statuses;
      const randomTweet = ranDom(tweet);   // pick a random tweet
  
      // if random tweet exists
      if(typeof randomTweet != 'undefined'){
        // Tell TWITTER to 'like'
        Twitter.post('favorites/create', {id: randomTweet.id_str}, (err, response) => {
          // if there was an error while 'like'
          if(err){
            console.log('Request failed');
          }
          else{
            console.log('Awesome tweet was liked!!.');
          }
        });
      }
    });
  }
  // grab & 'like' as soon as program is running...
  likeTweet();
  // 'like' a tweet in every 60 minutes
  setInterval(likeTweet, 3600000);

  // function to generate a random tweet tweet
  function ranDom (arr) {
    const index = Math.floor(Math.random()*arr.length);
    return arr[index];
  };