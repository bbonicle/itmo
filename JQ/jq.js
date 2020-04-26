$(document).ready(function() {
	
//1
	$("p").css({
		"fontSize":"20px",
		"color":"green", 
		"text-align":"center" 
	});

	$(".urgent").css({
		"fontSize": "30px",
		"backgroundColor": "#FA8072",
		"textDecoration" : "none"
	});
	$(".paragraph").css("color", "blue");
	$("#cancel").css({
		"position": "fixed",
		"right": "0", "top": "0"
	});
	$("form *").prop("disabled", true);

//2 работа с DOM
	$("a").prepend("↗");//добавляем стрелку
   	$("a").attr("target", "_blank");//получаем содержимое атрибута и устанавливаем содержимое, чтобы ссылки открывались в новой вкладке
   	$("a").each(function () {
        $(this).attr("href", function (index, value) {
            let protocol = value.substring(0, value.indexOf(':')); 
            if (protocol === 'http') { //если не https, дописываем s
                let href = value.substring(value.indexOf(':'), value.length);
                return protocol + 's' + href;
            }
        });
    });
});
//2.4 сброс 1 и 2 пункта

    $('body').append('<button id = "cancel">Cancel</button>'); //вставляем кнопку сброса с id cancel
    $("#cancel").click(function () { //функция активируется при нажатии по кнопке с id cancel

        $("a").each(function () { //перебор по сcылкам
            $(this).text(function (index, text) {
                if (text.substr(0, 1) === '↗') {
                    return text.substring(1, text.length);
                }
            });
        });
        //каждые формы меняем на активные
        $("form *").prop("disabled", false);
    });
//3 эффекты
    /*
    переходим от элемента с нужным id
    к родительскому элементу(те к строке в таблице)
    выделяем объекты-соседи по DOM
    Выделяем дочерний элемент
    Применяем анимацию
    */
    $("#fadeOut").click(() => {
        $("#fadeOut").parent().siblings().children().fadeOut();
    });

    $("#fadeIn").click(() => {
        $("#fadeIn").parent().siblings().children().fadeIn();
    });

    $("#fadeTo").click(() => {
        $("#fadeTo").parent().siblings().children().fadeTo(1000, 0.4, "linear", () => alert('Fade To succeded!'));
    });

    $("#slideDown").click(() => {
        $("#slideDown").parent().siblings().children().slideDown();
    });

    $("#slideToggle").click(() => {
        $("#slideToggle").parent().siblings().children().slideToggle();
    });

    $("#toggle").click(() => {
        $("#toggle").parent().siblings().children().toggle();
    });

    $("#ajax").click(() => {
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"  //адрес на который будет отправлен запрос
    }).done((e) => { // в случае успеха
        let pageContent = document.createElement("div");//создаем div
        pageContent.innerHTML = e;//возвращаем значение элемента страницы на которую отправили запрос
        $("body").append(pageContent);//вставляем то что получилось на нашу страницу
    });
});

/*отправьте запрос на этот адрес с любыми параметрами https://inxaoc.github.io/example/ajax.json .
В ответ вы получите ответ в формате JSON. 
Сохраните ответ в качестве объекта JS и выведите на страницу в форме вложенного списка (внутренние объекты–список в списке)
*/

$.ajax({
    url: "https://inxaoc.github.io/example/ajax.json"
}).done((e) => {
    let req = Object.assign({}, e);
    console.log(req);
    $("body").append(createList(req));
});

//prop - key, req[prop] - value
/*
1. Вызываем цикл
2. Если value - объект, то выводим key
	и далее начинаем перебирать его вложенные члены
3. Если value - не объект, то выводим value
*/
function createList(element) {
    let ul = document.createElement('ul');
    for (const props in element) {
        let li = document.createElement('li');
        if (typeof (element[props]) !== 'object') {
            li.innerText = element[props];
        } else {
            li.innerText = props;
            // добавляет вложенный список в li
            li.append(createList(element[props]));
        }
        ul.append(li);
    }
    return ul;
}