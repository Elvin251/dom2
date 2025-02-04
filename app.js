// function store() {
//     let list = document.getElementById("list1");
//     let newItem = document.createElement("li");
//     newItem.innertext = "Yeni Element";
// list.prepend(newItem)
// }
// function end() {
//     let list1 = document.getElementById("list2");
//     let newtem = document.createElement("li");
//     newtem.innertext = "Yeni Element";
// list1.append(newtem)
// }
// function salamla() {
//    document.body.style.backgroundColor="red"
    
//     }
    
//     let button = document.querySelector("button");
    
//     button.addEventListener("click",salamla);
let a= 0;
let b= 0;
let c=0;
let d=0;
function addParameters() {
    let input = prompt("Enter width, height, background color, text color");
    if (!input) return;
    let [width, height, bgColor, textColor] = input.split(',');
    
    if (!width || !height || !bgColor || !textColor) {
        alert("Please enter all parameters correctly!");
        return;
    }
    
    document.getElementById("width").innerText = width+"px";
    document.getElementById("height").innerText = height+"px";
    document.getElementById("bgColor").innerText = bgColor;
    document.getElementById("textColor").innerText = textColor;
    a=width+"px";
    b=height+"px";
    c= bgColor;
    d= textColor;
}


   
    function createElement1() {
        
        let newElement = document.createElement("div");
        newElement.style.width = document.getElementById("width").innerText;
        newElement.style.height = document.getElementById("height").innerText;
        newElement.style.backgroundColor = document.getElementById("bgColor").innerText;
        newElement.style.color =document.getElementById("textColor").innerText ;
        newElement.style.textAlign="center";
        newElement.innerText = "Lorem ipsum dolor sit amet...";
        newElement.style.marginTop = "10px";

        document.body.append(newElement);
    }
