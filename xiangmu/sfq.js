;(function(){
    "use strict";   
    $(".f").children(".f-l").children("ul").children("li").hover(function(){   
        $(this).css({          
            height:"60px",
        }).html()
        $(this).siblings().css({         
           
            height:"38px",
        })
    },function(){       
        $(this).css({
        'height':'38px'
    })
})
      
    })();
   