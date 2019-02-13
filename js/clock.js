var clock = document.getElementsByClassName('MobileClockTimer');



function Clock(){
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;
    for( let i=0 ; i<clock.length; i++){

    clock[i].textContent = clockString;
    }
}

Clock();
setInterval(Clock,1000);

