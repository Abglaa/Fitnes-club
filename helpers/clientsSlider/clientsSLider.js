$(document).ready(function(){
    $('.clients--slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false
    })


    $('.clientsArrow--prev').on('click', function(){
        $('.clients--slider').slick('prev')
    })
    $('.clientsArrow--next').on('click', function(){
        $('.clients--slider').slick('next')
    })


    $('.clients--slider').on('init reInit',function(event,slick){
        var amount = slick.slideCount;
        $('#clientsRange').attr('max',amount);
      })
      
      $('.clients--slider').on('afterChange',function(e,slick,currentSlide){
        $('#clientsRange').val(currentSlide + 1);
      })
      
      $('#clientsRange').on('input change',function(){
        $('.clients--slider').slick('slickGoTo',this.value - 1);
      });
})