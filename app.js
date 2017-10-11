require('dotenv').config()

var twit = require('twit');
var config = require('./config');


var Twitter = new twit(config.twitter);
// Likes Bot for Twitter ===============
// By @lauragift21

// find a random tweet and 'like' it
var likeTweet = function(){
    var params = {
        q: '#100DaysofCode',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    // for more parametes, see: https://dev.twitter.com/rest/reference
  
    // find the tweet
    Twitter.get('search/tweets', params, function(err,data){
  
      // find tweets
      var tweet = data.statuses;
      var randomTweet = ranDom(tweet);   // pick a random tweet
  
      // if random tweet exists
      if(typeof randomTweet != 'undefined'){
        // Tell TWITTER to 'like'
        Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
          // if there was an error while 'like'
          if(err){
            console.log('CANNOT BE like... Error');
          }
          else{
            console.log('Great liked!!... Success!!!');
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
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };