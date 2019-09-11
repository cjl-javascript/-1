;(function(){
    "use strict";
    $(".fen").children("dl").removeClass("bc");

        // $(".fen").children("dl").hover(function(){ 
        //     $(this).addClass("bc")
        //     $("nav").find(".cd").css({
        //         display:"block"
        //     })
        //   $("nav").find(".cd").eq($(this).index()).css({
        //     display:"none"               
        // }) }        
        // ,function(){
            
        //     $(".fen").children("dl").removeClass("bc")
        //     $("nav").find(".cd").css({
        //         display:"none"
        //     })
        // }) 
 
     $(".fen").children("dl").on("mouseover",function(){
        $(this).addClass("bc");
        $("nav").find(".cd").css({
            display:"block" ,
         })
        
         $("nav").find(".cd").eq($(this).index()).css({
                display:"none"               
             }) 
     } )      
     
})();