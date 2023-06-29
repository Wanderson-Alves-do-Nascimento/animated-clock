setInterval(()=>{
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  let secDot = document.querySelector('.sec_dot')
  let minDot = document.querySelector('.min_dot')
  let hourDot = document.querySelector('.hr_dot')
  let hr = document.getElementById('hr')
  let mn = document.getElementById('mn')
  let sc = document.getElementById('sc')
  
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  
  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;

  secDot.style.transform = `rotateZ(${s * 6}deg)`
  minDot.style.transform = `rotateZ(${m * 6}deg)`
  hourDot.style.transform = `rotateZ(${h * 30}deg)`

  hr.style.transform = `rotateZ(${h * 30}deg)`
  mn.style.transform = `rotateZ(${m * 6}deg)`
  sc.style.transform = `rotateZ(${s * 6}deg)`
})