$(function(){

  const $mainmenu = $(".mainmenu li")
  const $submenu = (".submenu")

  $mainmenu.hover(function(){
    $(this).find($submenu).stop().slideToggle()
  })


/* $(".slider li:gt(0)").hide()
setInterval(function(){
  $(".slider li:first-child").fadeOut()
  .next("li").fadeIn()
  .end().appendTo(".slider")
},3000) */

// 좌우 이동
let index = 0
const slider = $(".slider")

setInterval(function(){
  index = (index +1) % 3
  slider.animate({
    marginLeft :index * -100 + "%"
  },300)
},3000)

/* // 위아래 이동
let index = 0
const $height = $(".slider li").height()
const slider = $(".slider")

setInterval(function(){
  index = (index +1) % 3
  slider.animate({
    marginTop :index * -$height
  },300)
},3000) */


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