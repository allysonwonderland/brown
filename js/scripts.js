$(function () {
    let year = new Date();

    $("#header-placeholder").load("/brown/header.html");

    $("#nav-placeholder").load("/brown/nav.html", function () {
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        let homeLink = navLink.pop();
        console.log(pageLoc);
        console.log(homeLink);
       
        if ((homeLink.pop() == '') || (homeLink.pop() == '/')) {
            $('a[href$="' + homeLink + '"]').addClass("active");
            $('a[href$="' + homeLink + '"]').attr('href', '#');
            console.log(homeLink.pop());
            // $('.home').addClass("active");
            // $('.home').attr('href', '#');
        }
        else {
            let navPop = navLink.pop();
            console.log(navPop);

            $('a[href$="' + homeLink + '"]').addClass("active");
            $('a[href$="' + homeLink + '"]').attr('href', '#');
            $('[class$="' + navPop + '"]').addClass("active");
            console.log(homeLink);
        }
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});
