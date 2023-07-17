$(function(){
  const $mainMenu =$(".mainmenu li")
  
  $mainMenu.hover(function(){
    $(this).find(".submenu").stop().slideToggle(300)    
  })

  let index = 0
  const $slider = $(".slider")
  function slide(){
    index = (index + 1) %3;
    $slider.animate({
      marginLeft:index * -800
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