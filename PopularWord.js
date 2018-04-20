function mostPopWord (stroka) {
	let unicMass = [],
	countMass = [];
	
	// Меняем переходы строки на пробелы, всю строку в нижний индекс
	stroka = stroka.replace(/\n/g, ' ').toLowerCase();
	
	// Разбиваем строку на массив по пробелам
	let ishMass = stroka.split(' ');

	// Заполняем массив уникальных слов и массив встречаемости этих слов
    unicMass[0]=ishMass[0];
    countMass[0]=0;
	for (let i=0;i<=ishMass.length;i++){
	    let vstr = 0; // Флаг встречаемости слова в массиве уникальных
		for (let i2=0;i2<=ishMass.length;i2++){
            if (unicMass[i2] === ishMass[i]){
                vstr = 1; // Встретилось хотябы раз
            }
		}
		// Не встретилось ни разу, добавляем в массив уникальных
        if (vstr === 0){
            unicMass.push(ishMass[i]);
            countMass.push(0);
        }
	}

	// Считаем встречаемоть слов из массива уникальных
    for (let i2=0;i2<=unicMass.length;i2++){
	    for (let i=0;i<=ishMass.length;i++){
            if (unicMass[i2] === ishMass[i]){
                countMass[i2] +=1;
            }
        }
    }
	
	let maxCount=1, povtMax=0, word;
	
	// Ищем слова с максимальной встречаемостью
	for (let i2=0;i2<=unicMass.length;i2++){
		if (countMass[i2]>maxCount){
			maxCount = countMass[i2];
			word = unicMass[i2];
			povtMax=0;
		} else if (countMass[i2]===maxCount){
			povtMax+=1;
			word = "---"
			}
		}
	return word;
}

let text = 'Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera';
console.log(mostPopWord(text));
