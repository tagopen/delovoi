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
    $("html, body").animate({ scrollTop: $(".intro").offset().top +1}, 1500);
    return false;
  });
}

// Masked phone
$(function($){
  $(".form__input--phone").mask("+38 (999) 999-99-99");
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

/*CSS ANIMATION*/
  if( $( window ).width() >= 760 && $( window ).width() < 992 ) {
    $(window).scroll(function (){ 
      $('.scheme__container').each(function (){
       if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
        setTimeout(function(){ $( ".scheme__icon--1" ).animate({width: "180px"}, 2000); },1000);
        setTimeout(function(){ $( ".scheme__icon--2" ).animate({width: "180px"}, 2000); },3000);
        setTimeout(function(){ $( ".scheme__icon--4" ).animate({width: "180px"}, 2000); },5000);
        setTimeout(function(){ $( ".scheme__icon--5" ).animate({width: "180px"}, 2000); },7000);
      } 
    }); 
    });﻿
  };
  if( $( window ).width() >= 992 && $( window ).width() < 1200 ) {
    $(window).scroll(function (){ 
      $('.scheme__container').each(function (){
       if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
        setTimeout(function(){ $( ".scheme__icon--1" ).animate({width: "220px"}, 2000); },1000);
        setTimeout(function(){ $( ".scheme__icon--2" ).animate({width: "220px"}, 2000); },3000);
        setTimeout(function(){ $( ".scheme__icon--4" ).animate({width: "220px"}, 2000); },5000);
        setTimeout(function(){ $( ".scheme__icon--5" ).animate({width: "220px"}, 2000); },7000);
      } 
    }); 
    });﻿
  };
  if( $( window ).width() >= 1200 ) {
    $(window).scroll(function (){ 
      $('.scheme__container').each(function (){
       if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
        setTimeout(function(){ $( ".scheme__icon--1" ).animate({width: "289px"}, 2000); },1000);
        setTimeout(function(){ $( ".scheme__icon--2" ).animate({width: "289px"}, 2000); },3000);
        setTimeout(function(){ $( ".scheme__icon--4" ).animate({width: "289px"}, 2000); },5000);
        setTimeout(function(){ $( ".scheme__icon--5" ).animate({width: "289px"}, 2000); },7000);
      } 
    }); 
    });﻿
  };

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
      if ($(this).scrollTop() + $(this).height() >= $('.video').offset().top) {
        $('.video .chart').easyPieChart({
          animate: 10000,
          barColor: '#e7b869',
          trackColor: 'transparent',
          lineWidth: 6,
          scaleColor: 'transparent'
        });
      } 
      
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

})(jQuery); // End of use strict