$(function(){
  const $mainmenu = $(".mainmenu li")

  $mainmenu.hover(function(){
    $(this).find(".submenu").stop().slideToggle()
  })

  $(".slider li:gt(0)").hide()
  setInterval(function(){
    $(".slider li:first-child").fadeOut()
    .next("li").fadeIn()
    .end().appendTo(".slider")
  },3000)

  $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active")
    .siblings().removeClass("active")
  })
  
  const $modal = $("#modalArea")
  const $li = $(".notice li:first-child")
  const $btn = $(".modal .btn")
  $li.click(function(){
    $modal.fadeIn()
  })
  $btn.click(function(){
    $modal.fadeOut()
  })
})