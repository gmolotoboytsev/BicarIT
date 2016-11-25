$(document).ready(function() {
    $('.video').vide({
        webm: 'video/video.webm'
    }, {
        resizing: true
    });

    $(".search").on("click", function() {
      var area = $(".search-area");
      if (area.css("display") ==  "none") {
        area.show();
        $(this).hide();
      }
    });

    $(".search-close").on("click", function() {
        $(".search-area").hide();
        $(".search").show();
    });


    $(".place-button").on("click", function() {
        var id = $(this).attr("id");
        $(".place-area").hide();
        $(".place-button").removeClass("place-active");
        $(this).addClass("place-active");
        switch(id) {
            case "butOffice":
                $("#placeOffice").show();
                break;
            case "butStorage":
                $("#placeStorage").show();
                break;
        }
    });

});


$(window).scroll(function() {
    var top = $(document).scrollTop();
    
});