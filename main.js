$(function(){
  $(window).on('load scroll',function(){
    $(".animation").each(function(){
      var target=$(this).offset().top;
      var scroll=$(window).scrollTop();
      var height=$(window).height();
      if(scroll>target-height){
        $(this).addClass("active");
      }
    });
  });
});

const pics_src = ["image/clothing.jpg","image/music.jpg"];
let num = -1;

function slideshow_timer(){
  if (num === 1){
  num = 0;
  } 
  else {
  num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);