$(document).ready(function () {

    jQuery.expr[':'].date = function (elem) {
        return jQuery(elem).is("input") && $(elem
        ).attr("type") === "date";
    }
});

