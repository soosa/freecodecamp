var result;
//result = rot13("LBH QVQ VG!");

  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.get("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(jsonp) {


        var html = "";
        
        jsonp.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
          });
          html += "</div><br>";
        });

        $(".message").html(html);

      });
    });
  });



$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  ocument.getElementById('result').innerHTML = "<p>" + a[0].content + "</p>";
});

//document.getElementById('result').innerHTML = "<p>" + result + "</p>";
console.log(result);
