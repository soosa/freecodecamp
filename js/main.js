
var quote = [];
var author = [];
var tweetTxt,
  tweetURL,
  quoteCounter;

function showQuote(){
  
  if (quote.length < 1){
    getData(quote, author);
    document.getElementById('quoteBtn').innerText = "new";
    $('.content__quote').show("slow");
    $('body').css({"background-color":"#780206"}, 'slow'); 
  } else {
    quoteCounter = Math.floor(Math.random()*10);
    updateDOM(quote, author, quoteCounter);
  }
}

var getData = function(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10",
    headers: { "X-Mashape-Key": "VGpUtDzNLjmshP5NB6yS9QktRgszp1JFj83jsnbp9J50GlFiKo",
                Accept: "application/json",
               "Content-Type": "application/x-www-form-urlencoded"
    },
    type: "GET",
    dataType: "json",
    data: {},
    success: function(data){
      quoteCounter = Math.floor(Math.random()*10);
        for (var i = 0; i < data.length; i++) {
          quote.push(data[i].quote);
          author.push(data[i].author);
        }
        updateDOM(quote, author, quoteCounter);
    },
    error: function () {
      document.getElementById('error').innerHTML = 'error';
    }
  });
};

var updateDOM = function(quote, author, quoteCounter){
  tweetTxt = quote[quoteCounter];
  if (quote.length > 140){
    tweetTxt = tweetTxt.slice(0,137).concat("...");
  } 
  tweetURL = 'https://twitter.com/intent/tweet?status='+tweetTxt;
  $('.content__quote__tweet').attr('href',tweetURL);
  document.getElementById('quote').innerHTML = ' "' + quote[quoteCounter] + '"';
  document.getElementById('author').innerHTML = 'by '+ author[quoteCounter];
};


