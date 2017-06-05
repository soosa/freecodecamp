function showQuote(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10",
    headers:{ 
      "X-Mashape-Key": "DnqTSZUPEEmshooxMSL2Mtr34rNpp17KUafjsnNx7x6NlPFEdG",
      Accept: "application/json"
    }, 
    crossDomain: true,
    type: "GET",
    dataType: "json",
    data: {},
    success: function(data){ 
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

          $('#showBtn').fadeToggle( "fast", "linear" );
          $('.content__quote').show("slow");
          $('body').css({"background-color":"#267871"}, 'slow');
        }
      ,
      error: function () {
          document.getElementById('error').innerHTML = 'error' + error;
      }
  });
}