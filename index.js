$("i").hover(function(){
  $(this).addClass("hovered");
  setTimeout(function(){
    $("i").removeClass("hovered");
  },50)
})





