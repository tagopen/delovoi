(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

    $(function($) {
    var currentMousePos = { x: -1, y: -1 },
        prevMousePos    = {x: -1, y: -1},
        documentTop     = $(document).scrollTop();

    $(document).on('mousemove, mouseout', function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      documentTop = $(document).scrollTop();
        // ELSEWHERE, your code that needs to know the mouse position without an event
        if ((currentMousePos.y < prevMousePos.y) && (currentMousePos.y < documentTop + 21)) {
          $('#sibassa__modal').modal("show");
          $(document).unbind('mousemove, mouseout');
        }
        prevMousePos.x = currentMousePos.x;
        prevMousePos.y = currentMousePos.y;
      });
  });

  $('#comment__modal1').on('shown.bs.modal', function() {
    $(".comment__iframe--1 iframe").attr('src', 'https://www.youtube.com/embed/3DV7Z0uhKmU?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal1').on('hidden.bs.modal', function() {
    $(".comment__iframe--1 iframe").attr('src', 'https://www.youtube.com/embed/3DV7Z0uhKmU?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal2').on('shown.bs.modal', function() {
    $(".comment__iframe--2 iframe").attr('src', 'https://www.youtube.com/embed/hWeXAhrluE8?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal2').on('hidden.bs.modal', function() {
    $(".comment__iframe--2 iframe").attr('src', 'https://www.youtube.com/embed/hWeXAhrluE8?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal3').on('shown.bs.modal', function() {
    $(".comment__iframe--3 iframe").attr('src', 'https://www.youtube.com/embed/3EMsu7mrGcg?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal3').on('hidden.bs.modal', function() {
    $(".comment__iframe--3 iframe").attr('src', 'https://www.youtube.com/embed/3EMsu7mrGcg?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal4').on('shown.bs.modal', function() {
    $(".comment__iframe--4 iframe").attr('src', 'https://www.youtube.com/embed/0aR1FXB2V4U?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  });
  $('#comment__modal4').on('hidden.bs.modal', function() {
    $(".comment__iframe--4 iframe").attr('src', 'https://www.youtube.com/embed/0aR1FXB2V4U?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  });

  var firstModalOpen = $("body").hasClass("modal-open");

  $("#confident__modal").on('hidden.bs.modal', function()
  {
    if (!firstModalOpen)
      $("body").addClass("modal-open");
  });

  // Build Btn show all
  $('.tool__btn').on('click', function () {
    $('.tool__elem').removeClass('tool__elem--hidden');
    $('.tool__btn').hide();
  }); 

  if( $( window ).width() >= 760 ) {

    $('.intro__image').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });


    /*CSS ANIMATION*/
    $(window).scroll(function (){ 
      $('.animate').each(function (){
       if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
        $(this).addClass($(this).data('animation')); 
      } 
    }); 
    });﻿

  }

  $('.scheme__text').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


if( $( window ).width() >= 992 ) {
  $('.header__scroll').click(function(){
    $("html, body").animate({ scrollTop: $(".descr").offset().top +1}, 1500);
    return false;
  });
}

// Masked phone
$(function($){
  $(".form__input--phone").mask("+38 (999) 9999999");
});

// Today date
  $(function () {
    Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
    };

    Date.prototype.format = function(format) {
      // set default format if function argument not provided
      format = format || 'YYYY-MM-DD hh:mm';

      var zeropad = function(number, length) {
        number = number.toString();
        length = length || 2;
        while(number.length < length)
          number = '0' + number;
        return number;
      },
      // here you can define your formats
      formats = {
        YYYY: this.getFullYear(),
        MM: zeropad(this.getMonth() + 1),
        DD: zeropad(this.getDate()),
        hh: zeropad(this.getHours()),
        mm: zeropad(this.getMinutes())
      },
      pattern = '(' + Object.keys(formats).join(')|(') + ')';

      return format.replace(new RegExp(pattern, 'g'), function(match) {
        return formats[match];
      });
    };

    var currentDate    = new Date(),
        $dates         = $('[data-time]'),
        $currentDate   = $('.date__number');

    $currentDate.text(currentDate.format('DD/MM/YYYY'));

    $dates.each(function() {
      var $this = $(this),
          addDate = $this.data('time');

      currentDate.addDays(addDate);
      $this.text(currentDate.format('DD/MM/YYYY'));
    });
  });

  $(function () {
    $('.scheme__col').hover(
      function() {
        // don't update 'rel' attribute
        $(this).find('.scheme__hover').addClass('scheme__hover--visible');
      },
      function() {
        // here's the tricky part, if the rel attr is set
        $('.scheme__col').find('.scheme__hover').removeClass('scheme__hover--visible');
      }
    );
  });

 if( $( window ).width() >= 1200 ) {
    var sectionWidth = $( window).width() + 17,
        containerWidth = $('.container').width(),
        containerColumn2 = containerWidth/12,
        resultWidth = sectionWidth/2 - containerColumn2 -26 +"px";
    $('.case__image > img').css('width', resultWidth);
  };


  $('.case__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    dots: true,
    appendArrows: $('.case__arrows'),
    appendDots: $('.case__dots'),
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="ic ic--arrowleft"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="ic ic--arrowright"></i></button>',
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.comment__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    dots: true,
    appendArrows: $('.comment__arrows'),
    appendDots: $('.comment__dots'),
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="ic ic--arrowleft"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="ic ic--arrowright"></i></button>',
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.certificate__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    appendArrows: $('.certificate__arrows'),
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="ic ic--arrowleft"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="ic ic--arrowright"></i></button>',
    responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    ]
  });

  $(document).ready(function() {
    $('.fancybox').fancybox();
  });

  $(function() {
    $(window).scroll( function() {
/*      if ($(this).scrollTop() + $(this).height() >= $('.video').offset().top) {
        $('.video .chart').easyPieChart({
          animate: 10000,
          barColor: '#e7b869',
          trackColor: 'transparent',
          lineWidth: 6,
          scaleColor: 'transparent'
        });
      } */
      
      if($(this).scrollTop() + $(this).height() >= $('.comment').offset().top) {
        $('.comment .chart').easyPieChart({
          animate: 10000,
          barColor: '#e7b869',
          trackColor: 'transparent',
          lineWidth: 6,
          scaleColor: 'transparent'
        });
      }
      
    });
  });


  $(function () {
    var $time = $('.form__input--time');
    $time.hide();
    $('.checkbox-btn__control').on('change click', function () {
      if ($(this).is('#period-2')) {
        $time.stop().fadeIn('fast');
      } else {
        $time.stop().fadeOut('fast');
      }
    });
  });

  $(function() {
    var min = 100,
        max = 150,
        randomVal = 0,
        prevData = 0,
        date = new Date(),
        $dateText = $('.price__bait--random'),
        period = 24 * 60 * 60; // 24 hours

    date.setTime(date.getTime() + (period * 1000));

    if (!$.cookie('client') || !localStorage.getItem('client')) {
      //get your_data from server, then...
      prevData = parseInt( $dateText.text() );

      do {
        randomVal = getRandomInt(min, max);
      } while (prevData == randomVal)

      localStorage.setItem('client', randomVal );
      $dateText.text(randomVal);
      $.cookie('client', 1, { expires: date });
    } else {
      let your_data = localStorage.getItem('client');
      $dateText.text(your_data);
    }

    /**
    * Get a random integer between `min` and `max`.
    * 
    * @param {number} min - min number
    * @param {number} max - max number
    * @return {int} a random integer
    */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  });
})(jQuery); // End of use strict