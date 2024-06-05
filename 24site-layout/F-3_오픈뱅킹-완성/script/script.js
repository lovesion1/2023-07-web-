

$(function(){
  const $mainMenu = $(".mainMenu")
  const $subMenu = $(".subMenu")
  const $headerArea = $(".header_area")

  $mainMenu.hover(function(){
    $subMenu.stop().slideToggle(300);
    $headerArea.stop().toggleClass("on")
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