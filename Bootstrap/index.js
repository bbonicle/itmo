//alert ("error");
let H1 = document.createElement("h1"); //создание заголовка
H1.classList.add("h1","mb-5");
H1.innerText = "Создать таблицу";
document.querySelector(".container").appendChild(H1);

let newForm = document.createElement("form"); //создаем новую форму
newForm.classList.add("form-group");
document.querySelector(".container").appendChild(newForm);

let par1 = document.createElement("p");//создаем параграф
newForm.appendChild(par1);//добавляем внутрь формы
par1.innerText = "Введите количество строк:";

let input1 = document.createElement("input");
input1.classList.add("form-control", "mb-3", "mt-1");
newForm.appendChild(input1);
input1.type = "text";

let par2 = document.createElement("p");//создаем параграф внутри формы
newForm.appendChild(par2);
par2.innerText = "Введите количество столбиков:";

let input2 = document.createElement("input");
input2.classList.add("form-control", "mt-1");
newForm.appendChild(input2);
input2.type = "text";


let buttonSave = document.createElement("input"); //создаем кнопку сохранения
buttonSave.type = "button";
buttonSave.value = "Сохранить";
newForm.appendChild(buttonSave);
buttonSave.classList.add("btn", "btn-block", "btn-outline-primary", "px-5", "mx-auto", "mt-4", "justify-content-center");
buttonSave.onclick = function() {
		if (input1.value < 1 || input1.value < 1) {
        		alert("Ошибка!")
    		} else if (input2.value > 30){
        		alert("Слишком много столбиков");
    		} else{
     			   location.href = "table.html?width=" + input1.value + "&height=" + input2.value;
    		}
			return false
		}