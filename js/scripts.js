$(function () {
    $.when(
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'),
        $.getScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'),
        $.getScript('https://kit.fontawesome.com/1c11d0daec.js'),
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.0/jquery.matchHeight-min.js'),
    ).done(function () {
        let year = new Date();

        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        let pagePop = navLink.pop();
        let navPop = navLink.pop();

        let pageLink = ('a[href$="' + pageLoc + '"]');
        let pageNav = ('[class$="' + navPop + '"]');

        $("#header-placeholder").load("/brown/header.html");

        $("#nav-placeholder").load("/brown/nav.html", function () {

            if ($(pageLink).hasClass("dropdown-item")) {
                $(pageLink).addClass("active bg-menu-active");
            }

            $(pageLink).attr('href', '#');
            $(pageNav).addClass("active");
        });

        $("#footer-placeholder").load("/brown/footer.html", function () {
            $("#year").text(year.getFullYear());
        });

        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#top:hidden').stop(true, true).fadeIn();
            } else {
                $('#top').stop(true, true).fadeOut();
            }
        });

        let breadcrumbPagePop = pagePop.replace('.html', '');

        if (breadcrumbPagePop.indexOf("-") >= 0) {
            if (breadcrumbPagePop.indexOf("usgenweb") >= 0) {
                breadcrumbPagePop = breadcrumbPagePop.split('-');
                breadcrumbPagePop = breadcrumbPagePop[0].substr(0, 3).toUpperCase() +  breadcrumbPagePop[0].substr(3,2) + breadcrumbPagePop[0].substr(5,1).toUpperCase() + breadcrumbPagePop[0].substr(6) + " " + breadcrumbPagePop[1].substr(0, 1).toUpperCase() + breadcrumbPagePop[1].substr(1);
            }
            else {
                breadcrumbPagePop = breadcrumbPagePop.split('-');
                breadcrumbPagePop = breadcrumbPagePop[0].substr(0, 1).toUpperCase() + breadcrumbPagePop[0].substr(1) + " " + breadcrumbPagePop[1].substr(0, 1).toUpperCase() + breadcrumbPagePop[1].substr(1);
            }
        }
        else {
            breadcrumbPagePop = breadcrumbPagePop.substr(0, 1).toUpperCase() + breadcrumbPagePop.substr(1);
        }
        
        let breadcrumbNav = navPop.substr(0, 1).toUpperCase() + navPop.substr(1);

        if ($("ol").has("#breadcrumb")) {
            console.log(pageLoc);
            if (!(pagePop.trim()) || (pagePop.indexOf("index") >= 0)) {
                console.log("parent test");
                $("#breadcrumb").html('<li class="breadcrumb-item"><a href="/brown/index.html">Home</a></li><li class="breadcrumb-item active">' + breadcrumbNav + '</li>');
            }
            else {
                // ($(pagePop).has('.html') !== -1) {
                console.log("child test");
                $("#breadcrumb").html('<li class="breadcrumb-item"><a href="/brown/index.html">Home</a></li><li class="breadcrumb-item"><a href="index.html">' + breadcrumbNav + '</a></li><li class="breadcrumb-item active">' + breadcrumbPagePop + '</li>');
            }
        }
    });
});