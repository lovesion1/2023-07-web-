$(function(){
const $mainMenu = $(".mainmenu")
const $subMenu = $(".submenu")
const $header = $("header")
$mainMenu.hover(function(){
  $subMenu.stop().slideToggle(200);
  $header.stop().toggleClass("on")
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