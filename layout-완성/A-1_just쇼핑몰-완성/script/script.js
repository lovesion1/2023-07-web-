$(function(){
  let index = 0;
  const slider = $(".slider")

  function slide() {
    index = (index + 1) % 3;

    slider.animate({
      marginTop: index * -300
    }, 500)
  }
  setInterval(slide, 3000)
  // 3개의 슬라이드 위아래로 이동


  const $mainMenu = $(".mainmenu")
  const $subMenu = $(".submenu")
  $mainMenu.hover(function(){
    $subMenu.stop().fadeToggle(500)
  })
  // 부드럽게 서브메뉴 나왔다가 사라짐


  $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  // 각 탭 클릭시 해당 탱에 대한 내용 보여짐
  
  $(".notice ul > li:first").click(function(){
    $("#popupArea").show();
  });
  $("#popupArea .btn").click(function(){
    $("#popupArea").hide();
  })
  // 공지사항의 첫번째 콘텐츠 클릭시 팝업창 나타나고 닫기버튼으로 닫힘


})