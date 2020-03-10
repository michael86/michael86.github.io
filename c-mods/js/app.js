let cookies_agreed, cookie_shown = false;
let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

$(document).ready(function(){
  if (!!$.cookie('cMods')) {
    cookies_agreed, cookie_shown = true;
  };
});

window.onscroll = function() {
  makeNavSticky();
  if (!cookies_agreed && !cookie_shown) {
    $('#cookie').stop().animate({bottom: '0'});
    cookie_shown = !cookie_shown;
  }
};

function makeNavSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('#cookie-agree').click(function(){
  let height = $('#cookie').height();
  $('#cookie').stop().animate({bottom: `-${height}`});
  cookie_shown = !cookie_shown;
  cookies_agreed = !cookies_agreed;
  $.cookie('cMods', '{accepted}', { expires: 7 });
});

$('#login').click(function(){
  $('#login-form').fadeIn();
  $('#login-form').animate({top: '40%'}, 200);
  $("body").append('<div class="bodyOverlay">');
});

$('#close-login').click(function(){
  $('#login-form').animate({top: '-400px'}, 200);
  $('#login-form').fadeIn();
  $('.bodyOverlay').remove();
});

var app = document.getElementById('site-title');

var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter.typeString('C-ModZ | <strong>FiveM Scripts</strong>')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('<strong>ESX Support..</strong>')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('<strong>Standalone..</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start();