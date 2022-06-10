// nav bar 버튼에 마우스오버 시 설명 div 띄우기
const buttons = document.querySelectorAll(".nav__i");
const button_descriptions = document.getElementsByClassName("nav__btn-description");

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function(){
        button_descriptions[i].style.display = "block";
    })
    buttons[i].addEventListener("mouseout", function(){
        button_descriptions[i].style.display = "none";
    })
}