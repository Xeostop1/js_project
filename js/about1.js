    window.addEventListener('load',function (){

        //==========이미지슬라이드=========
  // $(document).ready(function(){ //제이쿼리랑 확인!! 다른가??? 
  //   $(".sliderWrap").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     infinite : true, 
  //     autoplaySpeed: 2000,
  //     pauseOnHover : true,
  //     dots : true
  //   })
  // });
  $(".sliderWrap").slick({
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
      autoplay: true,
      infinite : true, 
      autoplaySpeed: 5000,
      pauseOnHover : true,
      arrows: false
      // dots : true
  })


    }