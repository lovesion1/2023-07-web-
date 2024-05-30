

$(function(){
  const $mainMenu =$(".mainmenu li")
  const $subMenu = $(".submenu")
  const $headerA = $("header .inner")

  
  $mainMenu.hover(function(){
    $headerA.toggleClass("on");
    $(this).find($subMenu).stop().slideToggle(300)    
  })

  const $slider = $(".sliderWrap")
  let index = 0
  setInterval(function(){
    index = (index +1 ) % 3
    $slider.animate({
      marginLeft : index * - 100 + "%"
    },300) //marginLeft변경 속도
  },3000) //이미지 변경 속도


  $(".notice li:first").click(function(){
    $("#modalArea").show()
  })
  $(".modal .btn").click(function(){
    $("#modalArea").hide()
  })

})