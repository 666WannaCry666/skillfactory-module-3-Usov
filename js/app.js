window.onload = function () {
    const keysRUB = {'USD': 120.00, 'EUR': 131.73, 'UAH': 4.09, 'GBP': 156.51, 'JPY': 1.01, 'CNY': 18.82, 'ILS': 36.57, 'RUB': 1};

    let origin = document.getElementById('original'); // Получаем элемент ввода данных
    let currency1 = document.getElementById('cur1'); // Получаем первый селект
    let currency2 = document.getElementById('cur2'); // Получаем второй селект
    let result = document.getElementById('convert_result'); // Получаем поле куда будем писать результат
    function summ1() { // Делаем функцию
        let z = 0;
        if(currency1.value === currency2.value){ // Если оба значения в селектах равны
            result.value = origin.value; // То просто вписываем данные из поля ввода
        } else {
            if(currency1.value != 'RUB'){ // Если не равны рублю, то
                z = origin.value*keysRUB[currency1.value]; // Переводим сумму в рубли
                result.value = Math.ceil((z/keysRUB[currency2.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                result.value = Math.ceil((origin.value*keysRUB[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }

    function summ2() { // Делаем функцию
        let z = 0;
        if(currency2.value === currency1.value){ // Если оба значения в селектах равны
            origin.value = result.value; // То просто вписываем данные из поля ввода
        } else {
            if(currency1.value != 'RUB'){ // Если не равны рублю, то
                z = result.value*keysRUB[currency2.value]; // Переводим сумму в рубли
                origin.value = Math.ceil((z/keysRUB[currency1.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                origin.value = Math.ceil((result.value*keysRUB[currency1.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }

    origin.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ1();
    };
    result.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ2();
    };
    currency1.onchange = function () { // При смене первого селекта вызываем функцию.
        summ1();
    };
    currency2.onchange = function () { // При смене второго селекта вызываем функцию.
        summ1();
    }

}