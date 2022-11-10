function changeColor(){
    let elems = document.querySelectorAll("body");

    for (const elem of elems) {
        elem.classList.toggle("colored");
    }
}