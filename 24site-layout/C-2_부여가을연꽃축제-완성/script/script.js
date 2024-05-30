$(function(){
  const $mainmenu = $(".mainmenu li")
  const $submenu = $(".submenu")

  $mainmenu.hover(function(){
    $(this).find($submenu).stop().slideToggle()
  })

  $(".slider li:gt(0)").hide()
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