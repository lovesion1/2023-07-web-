$(function(){
  const $mainMenu = $(".mainMenu li")
  $mainMenu.hover(function(){
    $(this).find(".subMenu").stop().fadeToggle(500)
  })


  $(".slider li:gt(0)").hide();
  setInterval(function(){
    $(".slider li:first-child").fadeOut()
    .next("li").fadeIn()
    .end().appendTo(".slider")
  },3000)

  $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active")
    .siblings().removeClass("active")
  })

  $(".notice li:first-child").click(function(){
    $("#popupArea").show()
  })
  $("#popupArea").click(function(){
    $("#popupArea").hide()
  })


})