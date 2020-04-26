function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function createForm(nF){
        nF.innerHTML = "";

            let forms = document.createElement("form"); // создаем форму для поля ввода и кнопки
            forms.classList.add("form-group");
            nF.appendChild(forms);

            let textForm = document.createElement("textarea"); //поле ввода
            textForm.classList.add("form-control");
            forms.appendChild(textForm);

            let bSave = document.createElement("input"); //кнопка
            bSave.classList.add("btn", "btn-outline-primary", "mx-auto", "mt-2");
            bSave.type = "button";
            bSave.value = "Сохранить";
            forms.appendChild(bSave);

            bSave.onclick = function(){
                forms.innerText = textForm.value;
            }
}

function createTable(x, y){
    let newTable = document.createElement("table");
    newTable.classList.add("table", "table-responsive", "table-bordered")
    for (let i = 0; i<=x; i++){
        let newRow = document.createElement("tr");

        for (let j = 0; j<=y; j++){
            let newCol = document.createElement("td");
            newRow.appendChild(newCol);

             //Добавление содержимого
            let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (j == 0 && i == 0) {  //условие нулевой строки и столбца
                newCol.classList.add("tsvet");
            }
            else if (j == 0 && i !== 0) { //условие для цифр
                let num = document.createElement("p");
                num.innerHTML = i;
                newCol.classList.add("tsvet", "shir");
                newCol.appendChild(num);
            }
            else if (i == 0 && j !== 0) { //условие для букв
                let letter = document.createElement("p");
                letter.innerHTML = letters[j - 1];
                newCol.classList.add("tsvet");
                newCol.appendChild(letter);
            }
            else {                        //создание поля textarea
                createForm(newCol);
            }

        }

        newTable.appendChild(newRow);
    }
    
    document.querySelector(".container").appendChild(newTable);
}

function createCards() {   //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions", "mx-1", "d-flex", "justify-content-around", "mt-3", "flex-wrap")
    document.querySelector(".container").appendChild(functions)

    One(functions);
    Two(functions);
    Three(functions);
    Four(functions);
    Five(functions);

    return false
}

//-------------------------------------------Функции таблицы------------------------------------------------------

function One(functions){

    let div1 = document.createElement("div");
    div1.classList.add("card", "row", "p-2", "mr-1", "mb-1");
    functions.appendChild(div1);

    let p1 = document.createElement("p");
    p1.classList.add("card-title");
    p1.innerHTML = "Изменить границы таблицы";
    div1.appendChild(p1);

    let inputWidth = document.createElement("input"); // создаем поле ввода для ширины
    inputWidth.type = "text";
    inputWidth.classList.add("form-text", "form-control")
    inputWidth.oninput = function () {
        inputWidth.parentNode.querySelector("button").innerHTML = "Применить " + inputWidth.value + " px и рамка " + inputWidth.parentNode.querySelector("select").value;
    }
    inputWidth.maxLength = 3;
    div1.appendChild(inputWidth);

    let borders = document.createElement("select"); // создаем поле ввода для рамок
    borders.classList.add("form-text", "form-control");
    borders.onchange = function () {
        borders.parentNode.querySelector("button").innerHTML = "Применить " + borders.parentNode.querySelector("input").value + " px и рамка " + borders.value;
    }
    div1.appendChild(borders);

    let arrBorders = ["solid", "double", "dotted", "dashed"];
    for (let i = 0; i < 4; i++){
        let border = document.createElement("option");
        border.innerHTML = arrBorders[i];
        borders.appendChild(border);
    }

    let button_1 = document.createElement("button");
    button_1.classList.add("bb", "btn", "btn-outline-primary", "mx-auto", "mt-2");
    button_1.innerHTML = "Применить";
    button_1.onclick = function () {
        document.querySelector("table").style.width = button_1.parentNode.querySelector("input").value + "px";
        document.querySelector("table").style.borderStyle = button_1.parentNode.querySelector("select").value;
    }
    
    div1.appendChild(button_1);

}

function Two(functions){

    let div2 = document.createElement("div"); 
    div2.classList.add("card", "row", "p-2", "mx-1", "mb-1");
    functions.appendChild(div2);

    let p2 = document.createElement("p");
    p2.classList.add("card-title");
    p2.innerHTML = "Добавление заголовка";
    div2.appendChild(p2);

    let inputH2 = document.createElement("input");
    inputH2.classList.add("form-text", "form-control");
    inputH2.type = "text";
    div2.appendChild(inputH2);

    let button_2 = document.createElement("button");
    button_2.classList.add("btn", "btn-outline-primary", "mx-auto", "mt-2");
    button_2.innerHTML = "Добавить";
    button_2.onclick = function () {
        H.innerText = button_2.parentNode.querySelector("input").value;
    }

    div2.appendChild(button_2);

}

function Three(functions){

    let div3 = document.createElement("div"); 
    div3.classList.add("card", "row", "p-2", "mx-1", "mb-1");
    functions.appendChild(div3);

    let p3 = document.createElement("p"); //Удаление строки
    p3.classList.add("card-title");
    p3.innerHTML = "Выберите номер строки для удаления";
    div3.appendChild(p3);

    let inputNum = document.createElement("input");
    inputNum.classList.add("form-control");
    inputNum.type = "text";
    div3.appendChild(inputNum);

    let button_3 = document.createElement("button")
    button_3.classList.add("btn", "btn-outline-primary", "mx-auto", "mt-2");;
    button_3.innerHTML = "Удалить"
    button_3.onclick = function () {
        if ((button_3.parentNode.querySelector("input").value < document.getElementsByTagName("tr").length) && (button_3.parentNode.querySelector("input").value > 0)) {
            document.getElementsByTagName("tr")[button_3.parentNode.querySelector("input").value].remove()
        } else {
           alert("Некорректное значение");
       }
    }
div3.appendChild(button_3);
}

function Four(functions){

let div4 = document.createElement("div"); 
div4.classList.add("card", "row", "p-2", "mx-1", "mb-1");
functions.appendChild(div4);

let p4 = document.createElement("p");
p4.classList.add("card-title");
p4.innerHTML = "Случайное изменение";
div4.appendChild(p4);

let button_4 = document.createElement("button")
button_4.classList.add("btn", "btn-outline-primary");
button_4.innerHTML = "Magic"
button_4.onclick = function () {
    let magic = document.getElementsByTagName("tr")[getRandomInt(document.getElementsByTagName("tr").length )].getElementsByTagName("td")[getRandomInt(document.getElementsByTagName("tr")[0].getElementsByTagName("td").length)]
    magic.style.backgroundColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.fontSize = randomInteger(15, 25) + "pt"
    if (getRandomInt(100) > 75) {
        createForm(magic);
    }
}
div4.appendChild(button_4);

}

function Five(functions){
    let div5 = document.createElement("div");
    div5.classList.add("card", "p-2", "mx-1", "mb-1");
    functions.appendChild(div5);

    let p5 = document.createElement("p");
    p5.classList.add("card-title");
    p5.innerHTML = "Очистить таблицу";
    div5.appendChild(p5);

    let button_5 = document.createElement("button");
    button_5.classList.add("btn", "btn-outline-primary");
    button_5.innerHTML = "Очистить таблицу";
    functions.appendChild(button_5);
    button_5.onclick = function(){

        let inputs = functions.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        H.innerHTML = "";
        document.getElementsByClassName("bb")[0].innerHTML = "Применить";

        let trs = document.getElementsByTagName("tr");

        for (let i = 1; i < trs.length; i++) {
            let tds = trs[i].getElementsByTagName("td");
            for (let j = 1; j < tds.length; j++) {
                tds[j].style.backgroundColor = "white";
                tds[j].style.color = "black";
                tds[j].style.fontSize = "inherit";
                document.querySelector("table").style.border = "none";
                createForm(tds[j]);
            }
        }

    }
    div5.appendChild(button_5);
}



//--------------------------------------Действия со страницей---------------------------------------------------

let mas = [] //вытаскиваем переданные параметры и добавляем их в массив
let raw = document.location.search.substring(1).split("&")
for (let i = 0; i < raw.length; i++) {
    let value = raw[i].split("=")[1]
    mas.push(value)
}

createCards();

let H = document.createElement("h1");  // заголовок таблицы
H.innerHTML = "";
document.querySelector(".container").appendChild(H);

createTable(mas[0], mas[1]); //создаем таблицу