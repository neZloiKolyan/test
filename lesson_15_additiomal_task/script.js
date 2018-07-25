var user = prompt ("Как вас зовут?");
var age = prompt ("Сколько вам лет");
var signet = prompt ("Подписаны ли вы на рассылку? *В ответ (Да) или (Нет)");
var body = document.getElementsByTagName("body")[0];
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item")
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

if (age < 18) {
	alert("Ваш возраст меньше 18ти, по этому вам нельзя зайти на сайт");
	body.style.display = "none";
}

else{
	alert("Добро пожаловать!");
}

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";

}

function delItem() {
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);