function showQuote(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/endpoint?mashape-key=VGpUtDzNLjmshP5NB6yS9QktRgszp1JFj83jsnbp9J50GlFiKo",
    headers: { 
      "X-Mashape-Key": "VGpUtDzNLjmshP5NB6yS9QktRgszp1JFj83jsnbp9J50GlFiKo",
      // Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    type: "GET",
    dataType: "json",
    data: {},
    success: 
    function(data){ 
      const neon= ['color:cyan','background-color:black'].join(';');
      console.log("'%c success", neon);
        var quote = data.quote;
        var author = data.author;
          document.getElementById('quote').innerHTML = ' "' + quote + '"';
          document.getElementById('author').innerHTML = 'by '+ author;

          var tweetTxt = quote;
          if (tweetTxt.length >140){
            tweetTxt = tweetTxt.slice(0,137).concat("...");
          } 
          var tweetURL = '//twitter.com/intent/tweet?status='+tweetTxt;
          $('.content__quote__tweet').attr('href',tweetURL);

          document.getElementById('quoteBtn').innerText = "new";;
          $('.content__quote').show("slow");
          $('body').css({"background-color":"#267871"}, 'slow');

         },
      error: function () {
        document.getElementById('error').innerHTML = 'error' + error;
        const red= ['color:red','background-color:black'].join(';');
        console.log('%c error',neon);
      }
  });
}

var quote = [];
var author = [];
var tweetTxt,
  tweetURL,
  quoteCounter;

/*second version broken down to 3 functions*/
function showQuote2(){
  
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