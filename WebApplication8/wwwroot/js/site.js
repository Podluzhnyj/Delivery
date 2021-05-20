

$('#ddmenu li').hover(function () {
   clearTimeout($.data(this, 'timer'));
   $('ul', this).stop(true, true).slideDown(200);
}, function () {
   $.data(this, 'timer', setTimeout($.proxy(function () {
      $('ul', this).stop(true, true).slideUp(200);
   }, this), 100));
});
let blockMass = $(".blockc-third-section-blue");
if ($(window).width()>=1201) {
   $($(".cto-item-small")[0]).css({
      "position":"relative",
       top:"300px" 
   })
   $($(".item-content")[0]).css({
      "position":"relative",
       top:"400px" 
   })
   $($(".Offer")[0]).css({
      "position":"relative",
       top:"600px" 
   });
   for (let index =0; index < 2; index++) {
      $(blockMass[index]).css({
         "position":"relative",
          left:"1500px" ,
          top:0
      });     
   }
   for (let index = 2; index < 4; index++) {
      $(blockMass[index]).css({
         "position":"relative",
          left:"-1500px" ,
          top:0
      }) ;       
   }
}
$(window).scroll(function () { 
   if($(window).scrollTop()>=120){
      $($(".item-content")[0]).animate({
         "position":"relative",
          top:"0px"
      },1500)
      $($(".Offer")[0]).animate({
         "position":"relative",
          top:"0px"
      },2500)
   }
   if($(window).scrollTop()>=450&&$(window).scrollTop()<=500){
      $($(".cto-item-small")[0]).animate({
         "position":"relative",
          top:"0px"
      },2000)
   }
});




let blockFoto = $(".blockc-third-section");
if ($(window).width()>=1201) {
   for (let index = 1; index < 4; index++) {
      $(blockFoto[index]).css({
         "position":"relative",
          left:0 ,
          top:"+1500px"
      }) ;   
   }
   
}
$(window).scroll(function () { 
   if($(window).scrollTop()>=950&&$(window).scrollTop()<=1100){
      for (let index = 0; index < 5; index++) {
         $(blockMass[index]).animate({
            "position":"relative",
             left:"0px" ,
             top:0
         },2000);         
      }
      for (let index = 0; index < 5; index++) {
         $(blockMass[index]).animate({
            "position":"relative",
             left:"0px" ,
             top:0
         },3000);
         $(blockFoto[index]).animate({
            "position":"relative",
             left:0 ,
             top:"0px"
         },3000) ; 
      }
   }
});
if ($(window).scrollTop()>=250&&performance.navigation.type == 1) {
   $($(".item-content")[0]).css({
      "position":"relative",
       top:"0px" 
   })
   $($(".Offer")[0]).css({
      "position":"relative",
       top:"0px" 
   })
}
if ($(window).scrollTop()>=650&&performance.navigation.type == 1) {
   $($(".cto-item-small")[0]).css({
      "position":"relative",
       top:"0px" 
   });
   for (let index = 0; index < 4; index++) {
      $(blockMass[index]).css({
         "position":"relative",
          left:"0px" ,
          top:0
      });
      $(blockFoto[index]).css({
         "position":"relative",
          left:0 ,
          top:"0px"
      }) ;       
   }    
   console.log( "Страница перезагружена" );
}

if ($(window).width()>=700) {
    
}

