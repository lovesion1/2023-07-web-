

$(function(){
  const $mainMenu = $(".mainMenu li")
  $mainMenu.hover(function(){
    $(this).find(".subMenu").stop().fadeToggle(500)
  })

  $(".slider li:gt(0)").hide()
  setInterval(function(){
    $(".slider li:first-child").fadeOut()
    .next("li").fadeIn()
    .end().appendTo(".slider")
  },3000)

  const $tabmenu = $(".tabmenu > li")
  $tabmenu.click(function(){
    $(this).addClass("active").siblings().removeClass()
  })

  $(".notice li:first").click(function(){
    $("#modalArea").show()
  })
  $(".modal .btn").click(function(){
    $("#modalArea").hide()
  })

})