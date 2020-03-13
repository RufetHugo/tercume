


$('*').on('click', function (e){
    if (!$(e.target).is('.navbar-toggler')
        && !$(e.target).is('.navbar-toggler *')
        && !$(e.target).is('.main-nav')
        && !$(e.target).is('.main-nav *')){
        closeNav()
    }
});

function closeNav() {
    $('.navbar-collapse').collapse('hide');
}


/*====================================================================================================================*/
// Scroll To Target
/*====================================================================================================================*/

$('.scroll-to').each(function () {

    var $target = $(this),
        $offsetTop, lastId,
        menuItems = $('.scroll-to'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });


    if ($target.data('as-ot')) {
        $offsetTop = $target.data('as-ot');
    }
    if ($(window).width() >= 1200) {
        if ($target.data('lg-ot')) {
            $offsetTop = $target.data('lg-ot');
        }
    }
    if ($(window).width() < 1200 && $(window).width() > 991) {
        if ($target.data('md-ot')) {
            $offsetTop = $target.data('md-ot');
        }
    }
    if ($(window).width() < 992 && $(window).width() > 767) {
        if ($target.data('sm-ot')) {
            $offsetTop = $target.data('sm-ot');
        }
    }
    if ($(window).width() < 768) {
        if ($target.data('xs-ot')) {
            $offsetTop = $target.data('xs-ot');
        }
    }

    $target.on('click', function (event) {

        $('html, body').stop().animate({scrollTop: $($target.attr('href')).offset().top - $offsetTop}, 500);

        event.preventDefault();

    });

    $(window).scroll(function(){

        var fromTop = $(this).scrollTop() + $offsetTop;

        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop + 1)
                return this;
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems.removeClass("active").filter("[href='#"+id+"']").addClass("active");
        }
    });

});
