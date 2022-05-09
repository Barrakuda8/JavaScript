class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.stuffingObjects = [];

        this.fetchStuffing();
    }

    fetchStuffing() {
        for(const stuffing of this.stuffing) {
            const stuffingObject = new Stuffing(stuffing);
            this.stuffingObjects.push(stuffingObject);
        }
    }

    getCalories() {
        let calories = this.size.calories;
        for(const stuffing of this.stuffingObjects) {
            calories += stuffing.calories;
        }
        return calories;
    }

    getPrice() {
        let price = this.size.price;
        for(const stuffing of this.stuffingObjects) {
           price += stuffing.price;
        }
        return price;
    }
}

class Stuffing {
    constructor(stuffing) {
        this.price = stuffing.price;
        this.calories = stuffing.calories;
    }
}

window.onload = function () {

    const optionsInfo = {
        'big': {'price': 100, 'calories': 40},
        'small': {'price': 50, 'calories': 20},
        'cheese': {'price': 10, 'calories': 20},
        'salad': {'price': 20, 'calories': 5},
        'potato': {'price': 15, 'calories': 10},
        'flavoring': {'price': 15, 'calories': 0},
        'sauce': {'price': 20, 'calories': 5}
    }

    document.querySelector('button').addEventListener('click', function () {

        let stuffing = [];
        let size = optionsInfo[document.getElementById('size').value];
        stuffing.push(optionsInfo[document.getElementById('stuffing').value]);

        if(document.getElementById('flavoring').checked) {
            stuffing.push(optionsInfo['flavoring']);
        }

        if(document.getElementById('sauce').checked) {
            stuffing.push(optionsInfo['sauce']);
        }

        let burger = new Burger(size, stuffing);

        let resultEl = document.getElementById('result');
        resultEl.innerHTML = `Цена: ${burger.getPrice()} руб, Калории: ${burger.getCalories()}`;
        resultEl.style.padding = '10px';
        resultEl.style.border = '1px dashed black';
        resultEl.style.marginTop = '20px';
    });
}