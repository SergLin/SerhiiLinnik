//= partials/jQueryRotate.js
//= partials/jqBootstrapValidation.js

/*
//= partials/contact_me.js
*/

;

'use strict';

$(document).ready(function () {

  var navHeight = $("nav").outerHeight(true); //узнаем высоту меню навигации
  var screenHeight = $(window).height();// узнаем высоту екрана
  var headerHeight = screenHeight - navHeight;

// установка высоты header
  $("header").css("min-height", headerHeight);


// Плавный скролл после нажатия на якорную ссылку
  $("#mainMenu").on("click", "a", function (event) {
    event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
    var id = $(this).attr('href'), //забираем идентификатор блока с атрибута href
      top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь

    $('body,html').animate({scrollTop: top - navHeight}, 1500); //анимируем переход на расстояние - top за 1500 мс

// Смена оформления активной ссылки в меню
    $('#active').removeAttr('id');
    $(this).attr('id', 'active');

  });

//  валидатор форм
  $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

});

// куртилка шестеренок
var angle = 0;
setInterval(function () {
  angle -= 3;
  $("#gear1").rotate(angle * 2);
  $("#gear2").rotate(angle * -1.4);
  $("#gear3").rotate(angle);
}, 50);
