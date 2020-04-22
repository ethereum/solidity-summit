function pad2(num) {
    var s = "0" + num;
    return s.substr(s.length - 2);
}

var deadline = new Date("2020-04-29T13:00:00.000+02:00");

var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    
    [].forEach.call(document.getElementsByClassName("days"), function (el) {
        el.innerHTML = pad2(days);
    });
    [].forEach.call(document.getElementsByClassName("hours"), function (el) {
        el.innerHTML = pad2(hours);
    });
    [].forEach.call(document.getElementsByClassName("minutes"), function (el) {
        el.innerHTML = pad2(minutes);
    });
    [].forEach.call(document.getElementsByClassName("seconds"), function (el) {
        el.innerHTML = pad2(seconds);
    });
    if (t < 0) { 
        clearInterval(x);
        [].forEach.call(document.getElementsByClassName("clockdiv"), function (el) {
            el.style.visibility = "hidden";
        }); 
    }
}, 1000);