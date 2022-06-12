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

//menu planner 에서 ctrl 키 없이 메뉴 다중 선택 가능하도록
const menus = document.querySelectorAll("select#menu option");
for (let i=0; i<menus.length; i++) {
    menus[i].addEventListener("mousedown", function(event) {
        event.preventDefault();
        var scroll_offset = this.parentElement.scrollTop;
        this.selected = !this.selected;
        this.parentElement.scrollTop = scroll_offset;
    });
    menus[i].addEventListener("mousemove", function(event) {
        event.preventDefault();
    })
}

//menu planner에서 날짜 선택 값 가져오기
const menu_none = document.querySelector(".my_menu__contents-default");
const menu_content = document.querySelector(".my_menu__contents-selected");
const date = document.querySelector("#select_date");
date.addEventListener("change", input)
let date_selected = false;
function input(e) {
    if (e.target.value != null) { // 기능 소개 목적으로 우선 어떤 날짜든 선택을 하면 메뉴 띄우도록
        menu_none.style.display = "none";
        menu_content.style.display = "block"
    }
    date_selected = true;
}
function addMenu() {
    if (date_selected == true) {
        menu_none.style.display = "none";
        menu_content.style.display = "block"
    }
    else {
        alert("Please select the date to add menu")
    }
}

// menu_planner에서 내 메뉴에서 제거
let my_menu_li = document.querySelectorAll(".my_menu__contents-selected li");
let my_menu_li_remove_btn = document.querySelectorAll(".nutrition i");
for (let i=0; i<my_menu_li.length; i++) { // 휴지통 버튼을 클릭하면 해당 메뉴 메뉴판에서 지워짐.
    my_menu_li_remove_btn[i].addEventListener("click", function(){
        // my_menu_list[i].style.display = "none";
        my_menu_li[i].classList.remove("selected");
    })
}

// menu_planner에서 메뉴 추가하기
let options = document.querySelectorAll("#menu option");
function addMenu() {
    // let selected = [];
    for (let option of options) {
        if (option.selected) {
            // selected.push(option.value);
            my_menu_li[option.classList[0]].classList.add("selected");
        }
    }
    alert("Menu successfully added");
}

//menu planner 에서 checkbox 체크한 거에 따라 출력되는 메뉴 구분
const checkbox = document.querySelectorAll(".type_vegan");
// for (let i=0; i<checkbox.length; i++) {
//     checkbox[i].onclick = function(){
//         let is_checked = checkbox[i].checked;
//         if (is_checked) {
//             document.querySelectorAll("."+checkbox[i].value).style.display = "block";
//         }
//     }
// }
for (let i=0; i<checkbox.length; i++) {
    checkbox[i].addEventListener("click", function(){
        let is_checked = checkbox[i].checked;
        let option_menu = document.getElementsByClassName(checkbox[i].value);
        if (is_checked) {
            for (el of option_menu) {
                el.style.display = "block";
            }
        }
        else {
            for (el of option_menu) {
                el.style.display = "none";
            }
        }
    });
}

// menu_planner에서 하루 영양성분 합계 계산
let today_carbs = document.querySelectorAll(".selected .carbs");
for (let i=0; i<today_carbs.length; i++) {

}