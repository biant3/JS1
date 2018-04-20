function balanceSkobok(stroka) {
    let lastSkobka, stack = [];

    for (let i = 0; i <= stroka.length; i++) {
        // Заносим открывающие скобки в стек
        if (stroka[i] == '{' || stroka[i] == '(' || stroka[i] == '[') {
            stack.push(stroka[i]);

            // Если скобка закрывающая берем последнюю из стека
        } else if (stroka[i] == '}' || stroka[i] == ')' || stroka[i] == ']') {
            lastSkobka = stack.pop();
        }

        // Проверяем, если закрывающая скобка не соотвтествует открывающей возвращаем false
        if (stroka[i] == '}') {
            if (lastSkobka != '{') return false;
        } else if (stroka[i] == ')') {
            if (lastSkobka != '(') return false;
        } else if (stroka[i] == ']') {
            if (lastSkobka != '[') return false;
        }

    }
    // В конце прохода по строке проверяем, что стек пуст, если не пуст возвращаем false
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(balanceSkobok("{()}()"));
console.log(balanceSkobok('[(]{})'));
console.log(balanceSkobok('{[]({)}}'));
