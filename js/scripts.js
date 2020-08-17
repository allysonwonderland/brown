$(function() {    
    $("#header-placeholder").load("header.html");

    $("#nav-placeholder").load("nav.html", function () {
        let pageLoc = location.pathname.split("/");
        let navLink = pageLoc.pop();

        $('a[href="' + navLink + '"]').addClass("active");
        $('a[href="' + navLink + '"]').attr('href', '#');

        // let site = "http://allysonwonderland.github.io/brown/index.html";
        // let popSite = site.split("/");
        // console.log(popSite.pop());    
    });    
    
    $("#footer-placeholder").load("footer.html");
});