/* ==========================================
   Accessibility Widget
========================================== */

const openBtn = document.getElementById("openPanel");
const closeBtn = document.getElementById("closePanel");
const panel = document.getElementById("panel");

const increaseBtn = document.getElementById("increaseText");
const decreaseBtn = document.getElementById("decreaseText");
const highContrastBtn = document.getElementById("highContrast");
const normalContrastBtn = document.getElementById("normalContrast");
const highlightBtn = document.getElementById("highlightLinks");
const readBtn = document.getElementById("readPage");
const keyboardBtn = document.getElementById("keyboardHelp");
const resetBtn = document.getElementById("resetSettings");

/* ===========================
   Відкрити / закрити панель
=========================== */

openBtn.addEventListener("click", () => {
    panel.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    panel.classList.remove("open");
});

/* ===========================
   Розмір шрифту
=========================== */

let fontSize = Number(localStorage.getItem("fontSize")) || 100;

function applyFontSize() {
    document.body.style.fontSize = fontSize + "%";
    localStorage.setItem("fontSize", fontSize);
}

applyFontSize();

increaseBtn.addEventListener("click", () => {

    if(fontSize < 150){

        fontSize += 10;

        applyFontSize();

    }

});

decreaseBtn.addEventListener("click", () => {

    if(fontSize > 80){

        fontSize -= 10;

        applyFontSize();

    }

});

/* ===========================
   Контраст
=========================== */

if(localStorage.getItem("contrast") === "high"){

    document.body.classList.add("high-contrast");

}

highContrastBtn.addEventListener("click",()=>{

    document.body.classList.add("high-contrast");

    localStorage.setItem("contrast","high");

});

normalContrastBtn.addEventListener("click",()=>{

    document.body.classList.remove("high-contrast");

    localStorage.setItem("contrast","normal");

});

/* ===========================
   Виділити посилання
=========================== */

if(localStorage.getItem("links") === "on"){

    document.body.classList.add("highlight-links");

}

highlightBtn.addEventListener("click",()=>{

    document.body.classList.toggle("highlight-links");

    if(document.body.classList.contains("highlight-links")){

        localStorage.setItem("links","on");

    }else{

        localStorage.setItem("links","off");

    }

});

/* ===========================
   Озвучення сторінки
=========================== */

readBtn.addEventListener("click",()=>{

    speechSynthesis.cancel();

    const text=document.body.innerText;

    const speech=new SpeechSynthesisUtterance(text);

    speech.lang="uk-UA";

    speech.rate=1;

    speech.pitch=1;

    speechSynthesis.speak(speech);

});

/* ===========================
   Гарячі клавіші
=========================== */

keyboardBtn.addEventListener("click",()=>{

alert(

`Гарячі клавіші

Ctrl + +   Збільшити масштаб браузера

Ctrl + -   Зменшити масштаб

Ctrl + 0   Стандартний масштаб

Tab        Перехід між елементами

Enter      Активувати кнопку

Space      Натиснути кнопку`

);

});

/* ===========================
   Скинути налаштування
=========================== */

resetBtn.addEventListener("click",()=>{

    localStorage.clear();

    document.body.classList.remove("high-contrast");

    document.body.classList.remove("highlight-links");

    fontSize=100;

    applyFontSize();

    alert("Налаштування скинуто.");

});
