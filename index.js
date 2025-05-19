$(document).ready(function(){
    var slider = $('#slider').owlCarousel({
        items: 1, // Количество слайдов, отображаемых одновременно
        loop: true, // Бесконечный цикл
        margin: 10, // Отступ между слайдами
        nav: false, // Встроенные стрелки отключены
        dots: false, // Навигационные точки
        autoplay: false
    });

    $('.prev-slide').click(function() {
        slider.trigger('prev.owl.carousel');
      });

    $('.next-slide').click(function() {
        slider.trigger('next.owl.carousel');
      });
});