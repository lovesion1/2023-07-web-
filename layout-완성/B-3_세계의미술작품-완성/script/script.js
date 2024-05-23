$(function(){
  const $mainmenu = $(".mainmenu")
  const $submenu = $(".submenu")

  $mainmenu.hover(function(){
    $submenu.stop().slideToggle(300);
  })

  const $slider = $(".slider")
  let index = 0
  setInterval(function(){
    index = (index+1) %3
    $slider.animate({
      marginTop : index * -300
    })
  },3000)
  

  $(".notice li:first-child").click(function(){
    $("#modalArea").fadeIn()
  })
  $("#modalArea .btn").click(function(){
    $("#modalArea").fadeOut()
  })


})