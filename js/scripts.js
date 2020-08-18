$(function () {
// $.when(
//     $.getScript('https://code.jquery.com/jquery-3.5.1.js'),
//     $.getScript('https://code.jquery.com/jquery-3.5.1.min.js'),
//     $.getScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'),
//     $.getScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'),
//     $.getScript('https://kit.fontawesome.com/1c11d0daec.js'),
//     $.Deferred(function (deferred) {
//         $(deferred.resolve);
//     })
// ).done(function () {
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

        $('a[href$="' + pageLoc + '"]').addClass("active");
        $('a[href$="' + pageLoc + '"]').attr('href', '#');
        $('[class$="' + navPop + '"]').addClass("active");
    });

    $("#footer-placeholder").load("/brown/footer.html", function () {
        $("#year").text(year.getFullYear());
    });
});

