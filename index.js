function zeit() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('uhr').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(zeit, 500);
    }
    function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
    }
    