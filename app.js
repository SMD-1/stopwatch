let s = 0;
let m = 0;
let h = 0;

const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');
var timer;



/*          start       */

function start() {
    if(!timer)
        timer = setInterval(run , 1000);
}
function run() {
    display();
    s++;
    if(s==60) {
        s = 0;
        m++;
    }
    if(m>59) {
        m = 0;
        h++;
    }

}

function format(time) {
    if(time>=0){
        return time < 10 ? `0${time}` : time;
    }
}


/*       pause      */

function pause() {
    clearInterval(timer);
    timer = false;
}

/*        Restart      */

function restart() {
    clearInterval(timer);
    timer = false;
    s=0;
    m=0;
    h=0;
    display();
}

/*     Display    */
function display() {
    second.innerHTML = format(s);
    minute.innerHTML = format(m);
    hour.innerHTML = format(h);
}



