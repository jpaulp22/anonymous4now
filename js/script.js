$(function(){
    $(".toggle").click(function(){
        var elem = $(this).text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $(this).text("Read Less");
            $(this).prev().find(".content").slideDown();
            $(this).prev().find("#ellipses").css("display", "none");
        } else {
            //Stuff to do when btn is in the read less state
            $(this).text("Read More");
            $(this).prev().find(".content").slideUp();
            $(this).prev().find("#ellipses").css("display", "inline");
        }
    });
})
