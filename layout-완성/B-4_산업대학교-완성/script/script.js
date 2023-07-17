$(function(){
  const $mainMenu =$(".mainmenu")
  const $subMenu =$(".submenu")
  const $headerA = $("header .inner")

  
  $mainMenu.hover(function(){
    $headerA.toggleClass("on");
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
    $("#modalArea").show()
  })
  $(".modal .btn").click(function(){
    $("#modalArea").hide()
  })

})