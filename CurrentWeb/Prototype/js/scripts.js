$(document).ready(function(){
    $('.btn.btn-dark, ul a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        console.log($anchor.top);
        $('body').animate({ scrollTop: $anchor.top });
        return false;
    })
//    $('body').scrollspy({ target: '.navbar-scroll'})
})

