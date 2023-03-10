const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(
      (func) => increaseNumberAnimationStep(i, element, endNumber),
      INCREASE_NUMBER_ANIMATION_SPEED
    );
  }
}
function initIncreaseNumberAnimation() {
  const element = document.querySelector(".features__clients__count");
  increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();
console.log(initIncreaseNumberAnimation());
