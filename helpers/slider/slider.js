$(document).ready(function() {
    $('.gallery--slider').slick({
        speed: 1000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    })
})


// my custom arrows connection SLick arrows
$('.arrow--prev').on('click', function(){
    $('.gallery--slider').slick('prev')
})
$('.arrow--next').on('click', function(){
    $('.gallery--slider').slick('next')
})


//amount
var slidesCount = $('.gallery--slider').length;
//count
countSlide();
$('.count').html('1')

$('.gallery--slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    countSlide();
});
function countSlide() {
    let current = $('.gallery--slider').find('.slick-current').attr('data-slick-index');
    $('.count').html(Number(current) + 1);
}


