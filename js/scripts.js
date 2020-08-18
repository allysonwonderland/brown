$(function () {
    let year = new Date();

    $("#header-placeholder").load("/brown/header.html");

    $("#nav-placeholder").load("/brown/nav.html", function () {
        let pageLoc = window.location.pathname;
        console.log("Page location: " + pageLoc);
        let navLink = pageLoc.split("/");
        console.log(navLink);
        let navPop = navLink.pop();
        console.log(navPop);
        navPop = navLink.pop();
        console.log(navPop);      

        $('a[href$="' + pageLoc + '"]').addClass("active");
        $('a[href$="' + pageLoc + '"]').attr('href', '#');
        $('[class$="' + navPop + '"]').addClass("active");
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});
