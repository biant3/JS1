function vhozhdeniePodstrok (stroka){
	let maxK =1, k, t; 

	for (let dlT=1;dlT<stroka.length;dlT++){

		// Исходная строка обязана делиться подстрокой целое число раз
		if (stroka.length % dlT == 0) { 
			k = stroka.length / dlT;
			t = stroka.substr(0,dlT);
			let newStroka = t;
			
			// Создаем новую строку повторяя t
			for (let i=2;i<=k;i++){
				newStroka += t;
			}
			
			// Проверяем равенство новой строки старой
			if (newStroka === stroka){
				if (k>maxK) maxK=k;
			}
		}
	}
	return maxK;
}

console.log(vhozhdeniePodstrok("abcabcabcabc"));
