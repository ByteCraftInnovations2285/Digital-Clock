const h = document.querySelector(".hour span");
const m = document.querySelector(".minute span");
const s = document.querySelector(".second span");

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    h.innerHTML = hour;
    m.innerHTML = minute;
    s.innerHTML = second;
    
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
