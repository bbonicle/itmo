function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function CreateTable(str, stb) { //функция создания таблицы 
    let table = document.createElement("table")
    for (let i = 0; i < str; i++) {
        let row = document.createElement("tr")
        for (let j = 0; j < stb; j++) {
            let column = document.createElement("td")
            row.appendChild(column)
            let forma = document.createElement("form")
            column.appendChild(forma)
            let text = document.createElement("textarea") //3
            text.rows = 5
            text.cols = 10
            forma.appendChild(text)
            forma.appendChild(document.createElement("br"))
            let save = document.createElement("input")
            save.type = "submit"
            save.value = "сохранить"
            forma.appendChild(save)
            forma.onsubmit = function (e) {
                e.target.parentNode.innerText = e.target.elements[0].value
                return false
            }
        }
        table.appendChild(row)
    }
    document.body.appendChild(table)
}

function CreateBlocks() { //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions")
    functions.classList.add("hidden") //скрыт по умолчанию
    div0.appendChild(functions)

    let div1 = document.createElement("div") //первая кнопка
    functions.appendChild(div1)
    let p1 = document.createElement("p")
    p1.innerHTML = "изменить границы таблицы"
    div1.appendChild(p1)

    let width = document.createElement("input")
    width.type = "text"
    width.maxLength = 3
    width.oninput = function () { but1.innerText = "применить " + width.value + " px" + " и рамка " + variant.value }
    div1.appendChild(width)

    const border = ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
    let variant = document.createElement("select")
    div1.appendChild(variant)
    for (let i = 0; i < border.length; i++) {
        let opt = document.createElement("option")
        opt.innerText = border[i]
        variant.appendChild(opt)
        variant.onchange = function () { but1.innerText = "применить " + width.value + " px" + " и рамка " + variant.value }
    }

    let but1 = document.createElement("button") 
    but1.innerText = "применить"
    but1.onclick = function () {
        let text = but1.parentNode.querySelector("input").value
        let borderStyle = but1.parentNode.querySelector("select").value
        document.querySelector("table").style.borderStyle = borderStyle
        document.querySelector("table").style.width = text + "px"
    }
    div1.appendChild(but1)


    let div2 = document.createElement("div") //вторая кнопка
    functions.appendChild(div2)
    let p2 = document.createElement("p")
    p2.innerText = "добавить заголовок"
    div2.appendChild(p2)

    let head = document.createElement("input")
    head.type = "text"
    div2.appendChild(head)

    let but2 = document.createElement("button")
    but2.innerText = "добавить"
    but2.onclick = function () { h.innerText = head.value }
    div2.appendChild(but2)


    let div3 = document.createElement("div") //третья
    functions.appendChild(div3)
    let p3 = document.createElement("p")
    p3.innerText = "удалить строку"
    div3.appendChild(p3)

    let str = document.createElement("input")
    str.type = "text"
    div3.appendChild(str)

    let but3 = document.createElement("button")
    but3.innerText = "удалить"
    but3.onclick = function () {
        if (str.value > 0 && str.value - 1 < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.value - 1].remove()
        } else { alert("значение некорректно") }
    }
    div3.appendChild(but3)


    let div4 = document.createElement("div") //четвертая
    functions.appendChild(div4)
    let p4 = document.createElement("p")
    p4.innerText = "случайный выбор"
    div4.appendChild(p4)

    let but4 = document.createElement("button")
    but4.innerText = "мagic"
    but4.onclick = function () {
        let randi = randomInteger(0, document.getElementsByTagName("tr").length - 1)
        let randj = randomInteger(0, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[randi].childNodes[randj]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        if (Math.random() > 0.5) {
            rand.innerHTML=""
            let forma = document.createElement("form")
            rand.appendChild(forma)
            let text = document.createElement("textarea")     
            text.rows = 5
            text.cols = 10
            forma.appendChild(text)
            forma.appendChild(document.createElement("br"))
            let save = document.createElement("input")
            save.type = "submit"
            save.value = "сохранить"
            forma.appendChild(save)
            forma.onsubmit = function (e) {
                e.target.parentNode.innerText = e.target.elements[0].value
                return false
            }
        }
    }
    div4.appendChild(but4)

    let div5 = document.createElement("div") //пятая
    functions.appendChild(div5)
    let p5 = document.createElement("p")
    p5.innerText = "удалить таблицу"
    div5.appendChild(p5)
    let but5 = document.createElement("button")
    but5.innerText = "удалить"
    but5.onclick = function () {
        document.getElementsByTagName("table")[0].remove()
        forma.classList.remove("hidden")
        let inputs = functions.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        };
        but1.innerText = "применить"
        h.innerText = ""
        functions.classList.add("hidden")
    }
    div5.appendChild(but5)

    return false
}

//--------------------------------------------создание таблиц-----------------------------------------------------
let div0 = document.createElement("div") //создание формы 1
document.body.appendChild(div0)

let h = document.createElement("h2") //пустой тег для будущего заголовка
document.body.appendChild(h)

let forma = document.createElement("form")
forma.classList.add("add")
div0.appendChild(forma)
for (let i = 0; i < 2; i++) {
    let par = document.createElement("input")
    par.type = "number"
    forma.appendChild(par)
}
let t = document.createElement("p")
    t.innerText = "введите произвольное кол-во строк и столбцов"
    forma.prepend(t)

CreateBlocks() //создадим скрытый блок для параметров таблицы
let soxr = document.createElement("input")
soxr.type = "submit"
soxr.value = "создать"
forma.appendChild(soxr)
forma.onsubmit = function (e) {
   CreateTable(e.target.elements[0].value, e.target.elements[1].value)
    forma.classList.add("hidden") //присваиваем форме класс, в css делаем элементы этого класса невидимыми 
    forma.reset()
    document.getElementsByClassName("functions")[0].classList.remove("hidden") //делаем видимым 
    return false
}