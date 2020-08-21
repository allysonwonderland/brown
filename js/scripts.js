$(function () {
    $.when(
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'),
        $.getScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'),
        $.getScript('https://kit.fontawesome.com/1c11d0daec.js'),
    ).done(function () {
        let year = new Date();

        $("#header-placeholder").load("/brown/header.html");

        $("#nav-placeholder").load("/brown/nav.html", function () {
            let pageLoc = window.location.pathname;
            console.log("Page location: " + pageLoc);
            let navLink = pageLoc.split("/");
            console.log("Page array: " + navLink);
            let navPop = navLink.pop();
            console.log("First popped item: " + navPop);
            navPop = navLink.pop();            
            console.log("Final popped item: " + navPop);

            let pageLink = ('a[href$="' + pageLoc + '"]');
            let pageNav = ('[class$="' + navPop + '"]');

            if($(pageLink).hasClass("dropdown-item")) {
                $(pageLink).addClass("active bg-menu-active");
            }

            $(pageLink).attr('href', '#');
            $(pageNav).addClass("active");
        });

        $("#footer-placeholder").load("/brown/footer.html", function () {
            $("#year").text(year.getFullYear());
        });

        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#top:hidden').stop(true, true).fadeIn();
            } else {
                $('#top').stop(true, true).fadeOut();
            }
        });
    });
});
