$(function(){
  const $mainMenu = $(".mainmenu")
  // const $mainMenu = $(".mainmenu li")
  // 각각 나오게 하기 위함
  const $subMenu = $(".submenu")
  const $header =$("header")
  $mainMenu.hover(function(){
    $subMenu.stop().fadeToggle(500);
    $header.stop().toggleClass("on")
  }) 
  // 메인 메뉴 하나만 클릭해도 모두 보여지는 장면


  /* $mainMenu.hover(function(){
    $(this).find($subMenu).stop().fadeToggle(500)
  })
  // 각각 메뉴 나오게 하는 방법 */



  // 슬라이드 영역
  // 좌우 슬라이드 이동
/*   let index = 0
  const slider = $(".slider")

  setInterval(function(){
    index = (index + 1) % 3

    slider.animate({
      marginLeft : index * -1200
    },500)
  },3000) */


  /* // 위아래 슬라이드 이동
  let index = 0
  const slider = $(".slider")

  setInterval(function(){
    index = (index + 1) % 3

    slider.animate({
      marginTop : index * -300
    },500)
  },3000) */


    // 패더로 슬라이드 이동
    $(".slider li:gt(0)").hide();
    setInterval(function(){
      $(".slider li:first-child").fadeOut()
      .next('li').fadeIn()
      .end().appendTo(".slider")

    },3000)


    $(".tabmenu>li").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
    })

    $(".notice ul>li:first").click(function(){
      $("#modalArea").fadeIn();
    })
    $("#modalArea .btn").click(function(){
      $("#modalArea").fadeOut()
    })


})