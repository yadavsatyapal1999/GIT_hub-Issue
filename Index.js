

let n;

const inp = document.getElementById("timeCount")
const time = document.getElementById('current-time')
time.value = n
function Value(){
    n = parseFloat(inp.value)
}
function Timer() {
    console.log(n)
    if (n > 0) {
        return n = n - 1;
    } else {
        return clearInterval(myInterval)
    }

}
function  myInterval(){
    setInterval(Timer, 1000)
    Timer();
} 
myInterval()