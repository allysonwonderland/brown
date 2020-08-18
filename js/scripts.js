$(function () {
    let year = new Date();

    $("#header-placeholder").load("/brown/header.html");

    $("#nav-placeholder").load("/brown/nav.html", function () {
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        let homeLink = navLink.pop();
        // console.log(pageLoc);
        // console.log(homeLink);
       
        // if ((pageLoc == '') || (homeLink == '/')) {
        //     console.log(navLink);
        //     $('a[href$="' + navLink + '"]').addClass("active");
        //     $('a[href$="' + navLink + '"]').attr('href', '#');
            
        //     // $('.home').addClass("active");
        //     // $('.home').attr('href', '#');
        // }
        // else {
            let navPop = navLink.pop();
        //     console.log(navPop);

            $('a[href$="' + pageLoc + '"]').addClass("active");
            $('a[href$="' + pageLoc + '"]').attr('href', '#');
            $('[class$="' + navPop + '"]').addClass("active");
            console.log(pageLoc);
            console.log(navPop);
        
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});
