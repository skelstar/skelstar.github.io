$(document).ready(function () {
    $("#hamburger-button").click(function () {
        $("#top-nav-list").toggle();
    });
    populateHome();
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
    var pageUrl = "http://" + host + path;
    var $content = $("#content");
    var $mainSection = $("#main");
    $content.remove();
    $mainSection.append("<div class=\"description\" id=\"content\">");
    $.getJSON(pageUrl)
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

