$(document).ready(function(){
	$("#team1").mouseenter(function(){
		$("#caption1").slideDown();
	});
	$("#team1").mouseleave(function(){
		$("#caption1").slideUp();
	});
	$("#team2").mouseenter(function(){
		$("#caption2").slideDown();
	});
	$("#team2").mouseleave(function(){
		$("#caption2").slideUp();
	});
	$("#team3").mouseenter(function(){
		$("#caption3").slideDown();
	});
	$("#team3").mouseleave(function(){
		$("#caption3").slideUp();
	});
	$("#owl_im1").mouseenter(function(){
		$("#owl_h1").fadeIn("slow");
		$("#owl_t1").fadeIn("slow");
	});
	$("#owl_im1").mouseleave(function(){
		$("#owl_h1").fadeOut("slow");
		$("#owl_t1").fadeOut("slow");
	});
	$("#owl_im2").mouseenter(function(){
		$("#owl_h2").fadeIn("slow");
		$("#owl_t2").fadeIn("slow");
	});
	$("#owl_im2").mouseleave(function(){
		$("#owl_h2").fadeOut("slow");
		$("#owl_t2").fadeOut("slow");
	});
	$("#owl_im3").mouseenter(function(){
		$("#owl_h3").fadeIn("slow");
		$("#owl_t3").fadeIn("slow");
	});
	$("#owl_im3").mouseleave(function(){
		$("#owl_h3").fadeOut("slow");
		$("#owl_t3").fadeOut("slow");
	});
	$("#owl_im4").mouseenter(function(){
		$("#owl_h4").fadeIn("slow");
		$("#owl_t4").fadeIn("slow");
	});
	$("#owl_im4").mouseleave(function(){
		$("#owl_h4").fadeOut("slow");
		$("#owl_t4").fadeOut("slow");
	});
	$("#owl_im5").mouseenter(function(){
		$("#owl_h5").fadeIn("slow");
		$("#owl_t5").fadeIn("slow");
	});
	$("#owl_im5").mouseleave(function(){
		$("#owl_h5").fadeOut("slow");
		$("#owl_t5").fadeOut("slow");
	});
	$("#owl_im6").mouseenter(function(){
		$("#owl_h6").fadeIn("slow");
		$("#owl_t6").fadeIn("slow");
	});
	$("#owl_im6").mouseleave(function(){
		$("#owl_h6").fadeOut("slow");
		$("#owl_t6").fadeOut("slow");
	});
	$("#owl_im7").mouseenter(function(){
		$("#owl_h7").fadeIn("slow");
		$("#owl_t7").fadeIn("slow");
	});
	$("#owl_im7").mouseleave(function(){
		$("#owl_h7").fadeOut("slow");
		$("#owl_t7").fadeOut("slow");
	});
	$("#owl_im8").mouseenter(function(){
		$("#owl_h8").fadeIn("slow");
		$("#owl_t8").fadeIn("slow");
	});
	$("#owl_im8").mouseleave(function(){
		$("#owl_h8").fadeOut("slow");
		$("#owl_t8").fadeOut("slow");
	});
	
	
	

	

	  $("#owl_1").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
	$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 180) {
    $('.nav1').fadeIn();
    $('.logo').fadeOut();
    } else {
    $('.nav1').fadeOut();
    $('.logo').fadeIn();
    }
});	
	$(".loader").fadeOut(3000,"swing");
	/*COUNTER*/
    function createCounter(elementId,start,end,totalTime,callback)
                {
                    var jTarget=$("#"+elementId);
                    var interval=totalTime/(end-start);
                    var intervalId;
                    var current=start;
                    var f=function(){
                        jTarget.text(current+"+");
                        if(current==end)
                        {
                            clearInterval(intervalId);
                            if(callback)
                            {
                                callback();
                            }
                        }
                        ++current;
                    }
                    intervalId=setInterval(f,interval);
                    f();
                }
                function abc(){
                	 
                	 	createCounter("a1",0,1500,100); 
                    createCounter("a2",0,10,3000); 
                    createCounter("a3",0,800,100); 
                    createCounter("a4",0,30,3000);
                 
                	 }                
                    var c=0;
                  var w;
                var a; var e;
                 $(window).scroll(function() {
                 	
                         w=$(window).scrollTop();
                         a=$("#ACHIEVEMENT").position();
                         e=a.top;
                        if(w>e) {
                        	if (c>0) {
                         var r=clearInterval(k);
                       }
                       else{var k=setTimeout(abc(),200);}
                        	
                            c++;
                        }
                });
                 

})