$(function(){
  const $mainmenu = $(".mainmenu li")
  const $submenu = $(".submenu")

  $mainmenu.hover(function(){
    $(this).find($submenu).stop().slideToggle()
  })

  let index=0;
  const $height = $(".slider li").height()
  const slider = $(".slider")

  setInterval(function(){
    index = (index + 1) % 3;

    slider.animate({
      marginTop : index * - $height
    },500)
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