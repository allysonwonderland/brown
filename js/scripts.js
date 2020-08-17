$(function () {
    $("#header-placeholder").load("../header.html");

    $("#nav-placeholder").load("../nav.html", function () {
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split('/');
        console.log(pageLoc);
        console.log(navLink);
       
        if ((pageLoc == '') || (pageLoc == '/')) {
            $('.home').addClass('active');
            $('.home').attr('href', '#');
        }
        else {
            let navShift = navLink.slice(1,2);
            console.log(navShift);

            $('a[href="' + pageLoc + '"]').addClass('active');
            $('a[href="' + pageLoc + '"]').attr('href', '#');
            $('[class$="' + navShift + '"]').addClass('active');
        }
    });

    $("#footer-placeholder").load("../footer.html", function () {
        let year = new Date();
        $("#year").text(year.getFullYear());
    });
});
