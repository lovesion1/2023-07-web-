$(function(){
  const $mainmenu = $(".mainmenu li"),
        $submenu = $(".submenu")

  $mainmenu.hover(function(){
    $(this).find($submenu).stop().slideToggle()
  })        

  const $tabmenu = $(".tabmenu > li")
  $tabmenu.click(function(){
    $(this).addClass("active").siblings().removeClass()
  })


  const $slider = $(".slider")
  index =0
  setInterval(function(){
    index = (index+1) % 3
    $slider.animate({
      marginTop:index * - 400 
    },300)
  },3000)

  const $notice = $(".notice li:first-child")
  const $modal = $("#modalArea")
  $notice.click(function(){
    $modal.fadeIn()
  })
  $($modal).find(".btn").click(function(){
    $modal.fadeOut()
  })

})