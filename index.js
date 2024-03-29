const circularProgress = document.querySelector(".circular-progress")
const progressValue = document.querySelector(".progress-value"); 
const switchAnimate = document.querySelector(".switch-animate");
const switchHide = document.querySelector(".switch-hide");

progressValue.value = 0
switchAnimate.checked = false;
switchHide.checked = false;

let speed = 10;
let interval;
let deg = 0

const animateCircle = () => {
    interval = setInterval(() => {
      circularProgress.style.transform = `rotate(${deg++}deg)`
  }, 
  speed) 
}

progressValue.addEventListener('input', () => {
  circularProgress.style.background = `conic-gradient(#005cff ${progressValue.value * 3.6}deg, whitesmoke 0deg)`
})

switchAnimate.addEventListener('change', () => {
  if (switchAnimate.checked) {
    animateCircle()
  }
  else {
    clearInterval(interval)
    circularProgress.style.transform = `rotate(0deg)`
    deg = 0;
  }
})

let flag = true;
switchHide.addEventListener('change', () => {
  circularProgress.style.visibility = flag ? "hidden" : "visible"
  flag = !flag
})
