const circularProgress = document.querySelector(".circular-progress")
const progressValue = document.querySelector(".progress-value"); 
const switchAnimate = document.querySelector(".switch-animate");
const switchHide = document.querySelector(".switch-hide");

progressValue.value = 0
switchAnimate.checked = false;
switchHide.checked = false;

let currentProgressValue = 0;
let progressEndValue = 100;
let speed = 10;
let interval;
const animateCircle = () => {
    interval = setInterval(() => {
    currentProgressValue++;
    progressValue.value = `${currentProgressValue}`
    circularProgress.style.background = `conic-gradient(#005cff ${currentProgressValue * 3.6}deg, whitesmoke 0deg)`
    if (currentProgressValue == progressEndValue) {
      clearInterval(interval);
    }
  }, 
  speed) 
}

progressValue.addEventListener('input', () => {
  circularProgress.style.background = `conic-gradient(#005cff ${progressValue.value * 3.6}deg, whitesmoke 0deg)`
})

switchAnimate.addEventListener('change', () => {
  if (switchAnimate.checked) {
    currentProgressValue = 0
    clearInterval(interval)
    animateCircle()
  }
})

let flag = true;
switchHide.addEventListener('change', () => {
  circularProgress.style.visibility = flag ? "hidden" : "visible"
  flag = !flag
})
