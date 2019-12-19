// JavaScript Document
/* ================================================================ 
This copyright notice must be untouched at all times.
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
$(document).ready(function(){

$(".wrap div").hover(function() {
	$(this).animate({"top": "-220px"}, 400, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "-160px"}, 400, "swing");
});

});