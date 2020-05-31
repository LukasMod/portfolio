lightbox.option({
    'albumLabel': "Image %1 z %2"
})

$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");
})

$('header nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('a-section') + "]";
    console.log(goToSection)
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightS2 = $('section.projects').offset().top;
    const heightS3 = $('section.progress').offset().top;
    const heightS4 = $('section.contact').offset().top;
    const heightBottom = $('footer').offset().top;


    if (scrollValue < heightS2) {
        $('header nav a').not('a.about').removeClass('active');
        $('a.about').addClass('active')
    } else if (scrollValue < heightS3) {
        $('header nav a').not('a.projects').removeClass('active');
        $('a.projects').addClass('active');
    } else if (scrollValue < heightS4) {
        $('header nav a').not('a.progress').removeClass('active');
        $('a.progress').addClass('active');
    } else {
        $('header nav a').not('a.contact').removeClass('active');
        $('a.contact').addClass('active');
    }
}
$(window).on('scroll', changeDot);