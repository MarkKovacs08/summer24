let  m = document.getElementById("more");
let  l = document.getElementById("less");
let x = document.createElement("li");
let text = document.createTextNode("You can steal money from your local bank");
x.appendChild(text);
m.onclick = function(){
  //if(document.querySelector("button").innerHTML == "Click for more"){
    //document.querySelector("button").innerHTML ="Click for less";
    if(document.querySelector("ul").childElementCount == 5){
      alert("No more to add");
    }
    document.querySelector("ul").appendChild(x);

  //}
  //else {
     //document.querySelector("button").innerHTML ="Click for more";
     //document.querySelector("ul").removeChild(document.querySelector("ul").lastElementChild);
   //}
};
l.onclick = function(){
  if(document.querySelector("ul").childElementCount == 4){
    alert("No more to take away");
  }
   document.querySelector("ul").removeChild(x);
 };
