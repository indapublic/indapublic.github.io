function go() {
    var queryParams = new URLSearchParams(window.location.search);
    var p = queryParams.get("p");
    var f = queryParams.get("f");
    var v = queryParams.get("v");
    // var appScheme = 'kitinvest://';
    var appScheme = `kitinvest://${p}?${f}=${v}`;
    var landingUrl = 'https://apps.apple.com/ru/app/%D0%BA%D0%B8%D1%82-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id6443737556';

    var now = new Date().getTime();

    setTimeout(function () {
        if (new Date().getTime() - now > 100) return;
        window.location = appStoreURL;
    }, 25);

    window.location = appScheme;
}

document.addEventListener('DOMContentLoaded', function () {
    go();
});
