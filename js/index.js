var oSlider = document.getElementsByClassName('oslider')[0];
var oLi = oSlider.getElementsByTagName('li')[0];
var timer = null;



setInterval(autoMove, 3000);

function autoMove(direcation) {
    if (!direcation || direcation == "left") {
        console.log(oSlider.offsetLeft, oLi.offsetWidth, oSlider.offsetLeft == - 3 * oLi.offsetWidth)
        if (oSlider.offsetLeft == - 3 * oLi.offsetWidth) {
            oSlider.style.left = 0 + 'px';
        }
        Move(oSlider, oSlider.offsetLeft - oLi.offsetWidth);
    }
}

function Move(dom, target) {
    clearInterval(dom.timer);
    var iSpeed;
    dom.timer = setInterval(function () {
        iSpeed = (target - dom.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        dom.style.left = dom.offsetLeft + iSpeed + 'px';
    }, 30);
}