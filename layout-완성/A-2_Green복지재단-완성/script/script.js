$(function(){
  const $mainMenu =$(".mainMenu")
  const $subMenu =$(".subMenu")
  const $headerA = $("header")

  
  $mainMenu.hover(function(){
    $headerA.toggleClass("active");
    $subMenu.stop().slideToggle(300)    
  })

  let index = 0
  const $slider = $(".slider")
  function slide(){
    index = (index + 1) %3;
    $slider.animate({
      marginLeft:index * -1200
    },500)
  }
  setInterval(slide,3000)


  $(".notice li:first").click(function(){
    $("#popupArea").show()
  })
  $(".popup .btn").click(function(){
    $("#popupArea").hide()
  })

})