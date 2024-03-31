$(document).ready(function(){
    $('.trainers--slider').on('init reInit',function(event,slick){
        var amount = slick.slideCount;
        $('#teamRange').attr('max',amount);
      })
      
      $('.trainers--slider').on('afterChange',function(e,slick,currentSlide){
        $('#teamRange').val(currentSlide + 1);
      })
      
      $('#teamRange').on('input change',function(){
        $('.trainers--slider').slick('slickGoTo',this.value - 1);
      });
    
    
    $('.trainers--slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true
    })


    $('.teamArrow--prev').on('click', function(){
      $('.trainers--slider').slick('prev')
    }) 
    $('.teamArrow--next').on('click', function(){
      $('.trainers--slider').slick('next')
    })
})