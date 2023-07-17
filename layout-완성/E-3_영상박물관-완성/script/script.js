$(function(){
  const $mainMenu =$(".mainmenu > li")
  const $subMenu =$(".submenu")
  
  $mainMenu.hover(function(){
    $(this).find($subMenu).stop().slideToggle(300)    
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


  $(".notice li:first").click(function(){
    $("#modalArea").show()
  })
  $(".modal .btn").click(function(){
    $("#modalArea").hide()
  })

})