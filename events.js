var sections = document.getElementsByClassName("article-section");
var output=document.getElementById("output-target");
var keys = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var buttons=document.getElementsByTagName("button");

for(i=0; i<buttons.length;i++){
	buttons.item(i).addEventListener("click",handleButton);
}



for(i=0; i<sections.length;i++){
	sections.item(i).addEventListener("click", handleClick);
}

document.getElementById("page-header").addEventListener("mouseover",mouseOver);
document.getElementById("page-header").addEventListener("mouseout",mouseOut);


function handleClick(){
	output.innerHTML = "You clicked on the " + event.target.innerHTML + " section";

};

function mouseOver(){
	output.innerHTML ="You moved your mouse over the header";

};

function mouseOut(){
	output.innerHTML= "You left me!";

};
keys.addEventListener("keyup", function(){
	output.innerHTML= keys.value;
})

document.querySelector("body").addEventListener("click", function(event) {

});
function handleButton(){
	guineaPig.classList.toggle(event.target.id);
}
