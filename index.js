const title = document.querySelector("title");

const BASE_COLOR = "coral" 
function handleClick() {
    title.style.color = "blue";
}

function init(){  // 초기화
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick)
}

title.addEventListener("click", handleClick);