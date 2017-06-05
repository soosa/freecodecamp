function showQuote(){
  $.ajax({
    url: "https://quotes.rest/qod.json",
    headers:{ 
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/json"
    }, 
    crossDomain: true,
    type: "GET",
    dataType: "json",
    data: {},
    success: function(data){ 
      var quote = data.contents.quotes[0].quote;
      var author = data.contents.quotes[0].author;
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
      },
      error: function () {
          document.getElementById('error').innerHTML = 'error' + error;
      }
  });
}