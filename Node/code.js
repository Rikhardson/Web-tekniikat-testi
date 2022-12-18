let content = document.getElementById("content");

let hr = document.createElement("hr");
let h3 = document.createElement("h3");
h3.textContent = "Riku Puonti";

content.append(hr, h3);

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent="Sunnuntai";
ul.appendChild(li);

let turha = document.querySelector("ul li:first-child");

turha.remove();
//Tehtävä 3 Boldaus
let asd = document.querySelector("ul");

asd.style.fontWeight = "bold";

//Tehtävä 1 Maanantain lisäys
let h = document.querySelector("li");
let hh = document.createElement("li");
hh.textContent="Maanantai";
h.parentNode.insertBefore(hh, h);

/*let items = document.querySelectorAll("ul:first-child li");

for (item of items) {
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}*/
/**
 * @type {HTMLElement}
 */



let tyyli = document.querySelector(".last");
tyyli.style.fontWeight = "bold";
tyyli.style.border = "solid";



function changeColor(){
    let elems = document.querySelectorAll("ul:first-child li");

    for (constelem of elems) {
        elem.classList.toggle("colored");
    }
}

function changeSize(){
    let elems = document.querySelector("li");

    for (const e of elems) {
        if(e.textContent.length < 10){
            e.style.color="red";
        }
    }

}
