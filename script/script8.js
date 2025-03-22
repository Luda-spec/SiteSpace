const boxercontainer = document.getElementById("boxercontainer");
const boxer = boxercontainer.querySelector("img");

function getMousePos(xRef, yRef) {
    let panelRect = boxercontainer.getBoundingClientRect();
    let imageRect = boxer.getBoundingClientRect();
    let imageCenterX = imageRect.width / 2;
    let imageCenterY = imageRect.height / 2;
    return {
        x: xRef - panelRect.left - window.pageXOffset - imageCenterX,
        y: yRef - panelRect.top - window.pageYOffset - imageCenterY
    };
}

document.body.addEventListener("mousemove", function(e) {
    let mousePos = getMousePos(e.clientX, e.clientY);
    boxer.style.left = mousePos.x + "px";
    boxer.style.top = mousePos.y + "px";
});
