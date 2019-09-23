$(document).ready(function () {
    $("#hamburger-button").click(function () {
        $("#top-nav-list").toggle();
    });
    populateHome();

    /**Slider*/
    //var $slider = $('#slider');
    //var $slideContainer = $slider.find('.slides');
    //var $slides = $slideContainer.find('.slide');
    //var $currentSlide = 1;
    //var $nextSlide = $("#next-slide");
    //var $previousSlide = $("#previous-slide");
    //var $numberOfSlides = $slides.length;

    //$previousSlide.hide();
    //$nextSlide.click(function () {

    //    $slideContainer.css('margin-left', '+=-1230px');
    //    $currentSlide++;
    //    $previousSlide.show();
    //    if ($currentSlide === $numberOfSlides) {

    //        $nextSlide.hide();
    //    }
    //})

    //$previousSlide.click(function () {
    //    $slideContainer.css('margin-left', '+=1230px');
    //    $currentSlide--;
    //    if ($currentSlide < $numberOfSlides) {
    //        $nextSlide.show();
    //    }
    //    if ($currentSlide === 1) {

    //        $previousSlide.hide();
    //    }
    //})
    /**Slider End*/
});

function populateHome() {
    var homeContent = "/content/home.json";
    populateContent(homeContent);
}
function populateChooseUs() {
    var chooseUsContent = "/content/choose-us.json"
    populateContent(chooseUsContent);
}
function populateEnrollingAndFees() {
    var enrollingAndFees = "/content/enrolling-and-fees.json"
    populateContent(enrollingAndFees);
}
function populateContactUs()
{
    var contactUs = "/content/contact-us.json"
    populateContent(contactUs);
}

function populateContent(path) {
    var host = window.location.host;
    var pageUrl = "https://" + host + "/daycare" + path + "?;
    var $content = $("#content");
    var $mainSection = $("#main");
    $content.remove();
    $mainSection.append("<div class=\"description\" id=\"content\">");
    $.getJSON(pageUrl, {
        callback: "?"
      })
    .done(function (data) {
        $.each(data, function (key, val) {
            $("#content").append(val);
        });
        $mainSection.append("</div>");
    })
    .fail(function () {
        console.log("error");
    })
};

