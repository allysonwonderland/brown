$(function () {
    let year = new Date();

    $("#header-placeholder").load("/brown/header.html");

    $("#nav-placeholder").load("/brown/nav.html", function () {
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        let navPop = navLink.pop();
        navPop = navLink.pop();

        $('a[href$="' + pageLoc + '"]').addClass("active");
        $('a[href$="' + pageLoc + '"]').attr('href', '#');
        $('[class$="' + navPop + '"]').addClass("active");

        console.log("Page location: " + pageLoc);
        console.log("Page array: " + navLink);
        console.log("Page array length: " + navLink.length);
        // console.log("Popped last item off array: " + homeLink); 
        console.log("Page array: " + navLink);
        console.log("Popped last item off array 1: " + navPop); 
        console.log("Popped last item off array 2: " + navPop);      
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});
