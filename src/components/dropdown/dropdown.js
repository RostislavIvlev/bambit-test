import $ from "jquery";
 
global.jQuery = $;
global.$ = $;


$(function() {
    $(".dropdown-btn").on("click",(function() {
        $(this).next(".dropdown").slideToggle();
        if ($(this).hasClass("dropdown-btn_toggled")) {
            $(this).removeClass("dropdown-btn_toggled")
        } else $(this).addClass("dropdown-btn_toggled")
    }))
})

$(document).on("click", (function(e) {
    let target = e.target;
    let saleText = "";
    if (!$(target).is(".dropdown-btn") && !$(target).parents().is(".dropdown-btn")) {
        $(".dropdown").slideUp();
        $(".dropdown-btn").removeClass("dropdown-btn_toggled")
    }
    
    if ($(target).is(".dropdown__item")) {
        let text = "";
        let saleText = "";
        text = $(target).clone().children().remove().end().text();
        if ($(target).is(".dropdown__sale")) {
            text = $(target).text();
        }

        if ($(target).children().length > 0) {
            saleText = $(target).children().text();
        }

        if ($(target).children().length == 0) {
            $(".dropdown-btn__sale").addClass("dropdown-btn__sale_hidden")
        } else {
            $(".dropdown-btn__sale").removeClass("dropdown-btn__sale_hidden")
            $("#sale").text(saleText)
        }

        $("#dropdown").children().first().text(text);
    }
}))