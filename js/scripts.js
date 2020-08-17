$(function () {
    let year = new Date();

    $("#header-placeholder").load("/brown/header.html");

    $("#nav-placeholder").load("/brown/nav.html", function () {
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        console.log(pageLoc);
       
        if ((pageLoc == '') || (pageLoc == '/')) {
            $('.home').addClass("active");
            $('.home').attr('href', '#');
        }
        else {
            let navShift = navLink.slice(1,2);
            console.log(navShift);

            $('a[href="' + pageLoc + '"]').addClass("active");
            $('a[href="' + pageLoc + '"]').attr('href', '#');
            $('[class$="' + navShift + '"]').addClass("active");
        }
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});
