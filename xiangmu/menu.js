;(function(){
    "use strict";
    $(".fen").children("dl").removeClass("bc");

        $(".fen").children("dl").hover(function(){ 
            console.log( $("nav").children(".cd"))
            $("nav").find(".cd").css({
                display:"none"
            })
          $("nav").find(".cd").eq($(this).index()).css({
            display:"block"               
        }) }        
        ,function(){
            $(".fen").children("dl").removeClass("bc")
            $("nav").find(".cd").css({
                display:"none"
            })
        }) 
 
     
})();