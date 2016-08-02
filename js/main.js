'use strict';

$(function() {

    //Настройки
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //Определяем элементы DOM
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $controlRight = $('.right');
    var $controlLeft = $('.left');

    var interval;


    function forward() {

        if (currentSlide < $slides.length) {
          currentSlide=currentSlide+1;
          console.log(currentSlide);
              $slideContainer.animate({
                'margin-left': '-=' + width }, animationSpeed);
        }
    }
    function backward() {

        if (currentSlide > 1) {
          currentSlide=currentSlide-1;
          console.log(currentSlide);
              $slideContainer.animate({
                'margin-left': '+=' + width }, animationSpeed);
        }
    }
    $controlRight.on('click', forward);

    $controlLeft.on('click', backward);

});
