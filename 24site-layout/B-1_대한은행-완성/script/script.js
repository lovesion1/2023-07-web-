$(function(){
  const $mainMenu = $(".mainMenu")
  const $subMenu = $(".subMenu")
  $mainMenu.hover(function(){
    $subMenu.stop().slideToggle()
  })

  const $slider = $(".slider")
  let index = 0
  function slide(){
    index = (index + 1) % 3
    $slider.animate({
      marginLeft : index * -1200
    },500)
  }
  setInterval(slide,3000)

  $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active")
    .siblings().removeClass("active")
  })

  $(".notice li:first-child").click(function(){
    $("#modalArea").stop().fadeIn()
  })
  $("#modalArea .btn").click(function(){
    $("#modalArea").stop().fadeOut()
  })

})