$(function () {
    $.when(
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'),
        $.getScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'),
        $.getScript('https://kit.fontawesome.com/1c11d0daec.js'),
        $("#nav-placeholder").load("/brown/nav.html"),
        $("#header-placeholder").load("/brown/header.html"),
        $("#footer-placeholder").load("/brown/footer.html")
    ).done(function () {
        let year = new Date();
        
        let pageLoc = window.location.pathname;
        let navLink = pageLoc.split("/");
        let pagePop = navLink.pop();
        let navPop = navLink.pop();

        let pageLink = ('a[href$="' + pageLoc + '"]');
        let pageNav = ('[class$="' + navPop + '"]');
        let breadcrumbPage = '';
        let breadcrumbNav = navPop.substr(0, 1).toUpperCase() + navPop.substr(1);

        $("#year").text(year.getFullYear());

        if ($(pageLink).hasClass("dropdown-item")) {
            $(pageLink).addClass("active bg-menu-active");
            console.log($(pageLink).text());
            breadcrumbPage = $(pageLink).text();        
            $("#page-title").html('<h3>' + breadcrumbPage + '</h3>');    
        } else {
            $("#page-title").html('<h3>' + breadcrumbNav + '</h3>'); 
        }
        
        if ($("ol").has("#breadcrumb")) {
            console.log(pageLoc);
            if (!(pagePop.trim()) || (pagePop.indexOf("index") >= 0)) {
                console.log("parent test");
                $("#breadcrumb").html('<li class="breadcrumb-item"><a href="/brown/index.html">Home</a></li><li class="breadcrumb-item active">' + breadcrumbNav + '</li>');
            } else {
                console.log("child test");
                $("#breadcrumb").html('<li class="breadcrumb-item"><a href="/brown/index.html">Home</a></li><li class="breadcrumb-item"><a href="index.html">' + breadcrumbNav + '</a></li><li class="breadcrumb-item active">' + breadcrumbPage + '</li>');
            }
        }   

        $(pageLink).attr('href', '#');
        $(pageNav).addClass("active");    


        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#top:hidden').stop(true, true).fadeIn();
            } else {
                $('#top').stop(true, true).fadeOut();
            }
        });
    });
});