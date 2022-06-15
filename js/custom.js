
/*   공통   */
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

/*   home.html   */
// 이미지 우측 하단의 화살표 버튼 클릭 시 다음 이미지로 넘어감
let files = ["images/long_menu0.png",
"images/long_menu1.png",
"images/long_menu2.png"];
let texts = ["Italian Stuffed Peppers",
"White Chickpea Chili",
"Sheet Pan Chickpea Fajitas"];
let imgs = new Array();
for(let i=0; i<files.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = files[i];
}
let next = 1;
function test() {
  let displayed_image = document.querySelector(".main-images__image");
  let displayed_text = document.querySelector(".main-images__context-title span");
  displayed_image.src = imgs[next].src;
  displayed_text.innerHTML = texts[next];
  next++;
  next %= imgs.length;
}


/*    menu_planner.html    */



//checkbox 체크한 거에 따라 출력되는 메뉴 구분
const checkbox = document.querySelectorAll("input[type='checkbox']");
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
let date = document.querySelector("#select_date");
date.addEventListener("change", input);
let date_selected = false;
function input(e) {
    if (e.target.value != null) { // 기능 소개 목적으로 우선 어떤 날짜든 선택을 하면 메뉴 띄우도록
        menu_none.style.display = "none"; // 날짜 선택하라는 안내 메시지 없애고
        menu_content.style.display = "block"; // 해당 날짜의 메뉴 띄우기
        date_selected = true;
        show_nutrition(); // 해당 날짜의 영양성분 계산 표시
    }
}
function addMenu() {

}

//내 메뉴에서 제거
let my_menu_li = document.querySelectorAll(".my_menu__contents-selected li");
let my_menu_li_remove_btn = document.querySelectorAll(".nutrition i");
for (let i=0; i<my_menu_li.length; i++) { // 휴지통 버튼을 클릭하면 해당 메뉴 메뉴판에서 지워짐.
    my_menu_li_remove_btn[i].addEventListener("click", function(){
        // my_menu_list[i].style.display = "none";
        my_menu_li[i].classList.remove("selected");
        show_nutrition(); // 하루 영양성분 계산 갱신
    })
}

//메뉴 추가하기
let options = document.querySelectorAll("select#menu option");
function addMenu() {
    // let option_selected = false;
    for (let option of options) {
        if (option.selected) {
            if (date_selected) {
                my_menu_li[option.classList[0]].classList.add("selected");
                // option_selected = true;
            }
            else {
                alert("Please select the date you want to add");
            }
        }
    }
}


//하루 영양성분 합계 계산

function show_nutrition() {
    let selected_carb = document.querySelectorAll(".selected .carbs");
    let selected_protein = document.querySelectorAll(".selected .protein");
    let selected_fat = document.querySelectorAll(".selected .fat");

    let show_carb = document.getElementById("sum_carbs");
    let show_protein = document.getElementById("sum_protein");
    let show_fat = document.getElementById("sum_fat");

    let sum_carb = 0;
    let sum_protein = 0;
    let sum_fat = 0;

    for (let i=0; i<selected_carb.length; i++) {
        sum_carb += parseFloat(selected_carb[i].innerHTML);
        sum_protein += parseFloat(selected_protein[i].innerHTML);
        sum_fat += parseFloat(selected_fat[i].innerHTML);
    }
    if (date_selected) { // 날짜선택해서 todaymenu 뜰 때만 표시
        show_carb.innerHTML = sum_carb;
        show_protein.innerHTML = sum_protein;
        show_fat.innerHTML = sum_fat;
    }
}



/*   main_recommend.html   */
// 체크한 비건 타입 레시피만 띄우도록
let arr_article_list = document.querySelectorAll("tbody tr");
let check_vegantype = document.querySelectorAll(".article_header input");

for (let i=0; i<check_vegantype; i++) {
    check_vegantype[i].addEventListener("click", function() {
        if (!check_vegantype[i].checked) {
            for (let j=0; j<arr_article_list; j++) {
                if (arr_article_list[j].className == check_vegantype[i].value) {
                    arr_article_list[j].style.display="none";
                }
            }
        }
        else {
            for (let j=0; j<arr_article_list; j++) {
                if (arr_article_list[j].className == check_vegantype[i].value) {
                    arr_article_list[j].style.display = "block";
                }
            }
        }
    })

}