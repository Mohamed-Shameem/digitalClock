let h = document.querySelectorAll(".h");
let m = document.querySelectorAll(".m");
let s = document.querySelectorAll(".s");
let date = document.querySelector(".date");
let days = document.querySelectorAll(".days span");
let month = document.querySelectorAll(".month span");
let amORpm = document.querySelectorAll(".amORpm span");

function digitalClock() {
  //date
  let time = new Date();
  let d = time.getDate();
  let mon = time.getMonth() + 1;
  let y = time.getFullYear();
  date.innerHTML = `${d}-${mon}-${y}`;

  //day
  days[time.getDay()].classList.add("days-active");

  //month
  month[time.getMonth()].classList.add("days-active");

  //time
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  // #amORpm
  if (hrs > 12) {
    hrs = hrs - 12;
    amORpm[1].classList.add("active");
  } else {
    if (hrs == 0) {
      hrs = 12;
    } else {
      amORpm[0].classList.add("active");
    }
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hrs = hrs.toString();
  min = min.toString();
  sec = sec.toString();

  h[0].innerHTML = hrs[0];
  h[1].innerHTML = hrs[1];
  m[0].innerHTML = min[0];
  m[1].innerHTML = min[1];
  s[0].innerHTML = sec[0];
  s[1].innerHTML = sec[1];
}

// digitalClock()
setInterval(digitalClock, 1000);
