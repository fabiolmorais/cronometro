let day = 0;
let h = 0;
let m = 0;
let s = 0;
let timer;
let days = document.querySelector("#days").innerHTML = formatTime(day);
let hours = document.querySelector("#hours").innerHTML = formatTime(h);
let mins = document.querySelector("#mins").innerHTML = formatTime(m);
let sec = document.querySelector("#seconds").innerHTML = formatTime(s); 

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function stopwatch() {
    s++;

    if ( s == 60) {
        m++;
        s = 0;
        if ( m == 60) {
            h++;
            m = 0;
            if ( h == 24) {
                day++;
                h = 0;
            }
        }
    }
    days = document.querySelector("#days").innerHTML = formatTime(day);
    hours = document.querySelector("#hours").innerHTML = formatTime(h);
    mins = document.querySelector("#mins").innerHTML = formatTime(m);
    sec = document.querySelector("#seconds").innerHTML = formatTime(s);

}

function start() {
    timer = setInterval(stopwatch, 1000);
}

function pause() {
    clearInterval(timer);
}

function stop() {
    clearInterval(timer);
    let day = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    days = document.querySelector("#days").innerHTML = formatTime(day);
    hours = document.querySelector("#hours").innerHTML = formatTime(h);
    mins = document.querySelector("#mins").innerHTML = formatTime(m);
    sec = document.querySelector("#seconds").innerHTML = formatTime(s);
}