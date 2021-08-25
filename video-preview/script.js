console.log("page loaded...");

function previewPlay(element) {
    element.play();
}

function stopPrev(element) {
    element.pause();
    element.currentTime=0;
}

function mainPlay(element) {
    var srcName = element.firstElementChild.getAttribute("src");
    document.querySelector("#videoScreen > source").src=srcName;
    document.querySelector("#videoScreen").load();
    document.querySelector(".start > h1").innerHTML=element.nextElementSibling.innerHTML;
}
