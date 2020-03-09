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

$('#cookie-consent').click(function(){
  let height = $('#cookie').height();
  $('#cookie').stop().animate({bottom: `-${height}`});
  cookie_shown = !cookie_shown;
  cookies_agreed = !cookies_agreed;
  console.log('attempting to place cookie')
  $.cookie('cMods', '{accepted}', { expires: 7 });
});