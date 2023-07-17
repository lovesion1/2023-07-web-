$(function(){
  const $mainmenu = $(".mainmenu")
  const $submenu = $(".submenu")
  const $wrap =$("#wrap")
  $mainmenu.hover(function(){
    $submenu.stop().slideToggle(100);
    $wrap.stop().toggleClass("on")
  })

  $(".slider li:gt(0)").hide()

  const $tabmenu = $(".tabmenu > li")
  $tabmenu.click(function(){
    $(this).addClass("active").siblings().removeClass()
  })

  setInterval(function(){
    $(".slider li:first-child").fadeOut()
    .next("li").fadeIn()
    .end().appendTo(".slider")
  },3000)

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