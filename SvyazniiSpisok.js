// Элемент списка
function Element(data) {
    this.data = data;
    this.next = null;
}

// Шапка списка
function SvyazniiSpisok() {
    this._length = 0;
    this.head = null;
}

// Добавляем элемент
SvyazniiSpisok.prototype.add = function(value) {
    var element = new Element(value),
        currentElement = this.head;
 
    // В пустой список
    if (!currentElement) {
        this.head = element;
        this._length++;
 
        return element;
    }
 
    // В непустой список
    while (currentElement.next) {
        currentElement = currentElement.next;
    }
 
    currentElement.next = element;
 
    this._length++;
 
    return element;
};

// Ищем элемент по позиции в списке
SvyazniiSpisok.prototype.searchElementAt = function(position) {
    var currentElement = this.head,
        length = this._length,
        count = 1;
 
    while (count < position) {
        currentElement = currentElement.next;
        count++;
    }
 
    return currentElement;
};
 
// Удаляем элемент
SvyazniiSpisok.prototype.remove = function(position) {
    var currentElement = this.head,
        length = this._length,
        count = 0,
        beforeElementToDelete = null,
        elementToDelete = null,
        deletedElement = null;
 
    // удаляем первый элемент
    if (position === 1) {
        this.head = currentElement.next;
        deletedElement = currentElement;
        currentElement = null;
        this._length--;
 
        return deletedElement;
    }
 
    // Удаляем другие элементы
    while (count < position) {
        beforeElementToDelete = currentElement;
        elementToDelete = currentElement.next;
        count++;
    }
 
    beforeElementToDelete.next = elementToDelete.next;
    deletedElement = elementToDelete;
    elementToDelete = null;
    this._length--;
 
    return deletedElement;
};

//Выводим список в консоль
SvyazniiSpisok.prototype.show = function(){    
    for (let count = 1; count <= this._length; count++){
      console.log(this.searchElementAt(count).data);
    }
};

//Суммируем два списка
SvyazniiSpisok.prototype.sum = function(svyazniiSpisok2){
  let result = new SvyazniiSpisok();
  let vUme=0;
  if (this._length === svyazniiSpisok2._length){
      for (let i = 1; i<= this._length; i++){
          let newElement = this.searchElementAt(i).data + svyazniiSpisok2.searchElementAt(i).data + vUme;
		  if (newElement>=10) {
		  newElement-=10;
		  vUme=1;} else {
		  vUme=0;}
          result.add(newElement);
      }
      if (vUme!=0) result.add(vUme);
      result.show();
  }
  
};

// Считаем задачу
let spisok1 = new SvyazniiSpisok();
spisok1.add(2);
spisok1.add(4);
spisok1.add(3);

let spisok2 = new SvyazniiSpisok();
spisok2.add(5);
spisok2.add(6);
spisok2.add(4);

spisok1.sum(spisok2);
