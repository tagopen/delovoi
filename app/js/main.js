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
  }

if( $( window ).width() >= 968 ) {
  $('.header__scroll').click(function(){
    $("html, body").animate({ scrollTop: $(".intro").offset().top +1}, 1500);
    return false;
  });
}

// Masked phone
$(function($){
  $(".form__input--phone").mask("+38 (999) 999-99-99");
});

})(jQuery); // End of use strict