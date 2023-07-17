$(function(){
  const $mainmenu = $(".mainmenu li")
  const $submenu = $(".submenu")

  $mainmenu.hover(function(){
    $(this).find($submenu).stop().slideToggle()
  })

  const $slider = $(".sliderWrap")
  let index = 0
  setInterval(function(){
    index = (index +1 ) % 3
    $slider.animate({
      marginLeft : index * - 100 + "%"
    },300) //marginLeft변경 속도
  },3000) //이미지 변경 속도

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