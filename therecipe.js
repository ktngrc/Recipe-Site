

def_count = 60;

timer_reset();

function timer_reset() {
 timerID = 0;
 document.ktimer.counter.value = def_count;
 document.ktimer.b_start.disabled = false;
}

function set_timer(num) {
 if (timerID > 0) {
  count_stop();
 }
 document.ktimer.counter.value = num;
 count_start();
}

function count_start() {
 count = document.ktimer.counter.value;
 document.ktimer.b_start.disabled = true;
 timerID = setInterval('countdown()',1000);
}

function countdown() {
 count--;
 document.ktimer.counter.value = count_format(count);
 if (count <= 0) {
  count_stop();
 }
}

function count_stop() {
 clearInterval(timerID);
 timer_reset();
}

function count_format(num) {
 var tm,ts;
 tm = Math.floor(num / 60);
 ts = num % 60;
 if (ts < 10) ts = "0" + ts;
 return tm + ":" + ts;
}
