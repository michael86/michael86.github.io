
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});

$(window).resize(function() {
    
    var width = document.body.clientWidth //get width
    if(width <= 850){ //if width less than or equal to 850px
        if(!document.querySelector('.rand-videos').classList.contains('container')){ //if container not active
            document.querySelector('.rand-videos').classList.toggle('container'); //set active
        }
    }else if(width > 850){ //if bigger than 850px
        if(document.querySelector('.rand-videos').classList.contains('container')){ //if container
            document.querySelector('.rand-videos').classList.toggle('container'); //remove
        }
    }
});
