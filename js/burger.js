class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppingObjects = [];

        console.log(`Калории: ${this.getCalories()}, Цена(руб): ${this.getPrice()}`);
    }

    fetchStuffing() {
        for(const topping of this.stuffing) {
            const toppingObject = new Topping(topping);
            this.toppingObjects.push(toppingObjects);
        }
    }

    getCalories() {
        let calories = this.size.calories;
        for(const topping of this.toppingObjects) {
            calories += topping.calories;
        }
        return calories;
    }

    getPrice() {
        let price = this.size.price;
        for(const topping of this.toppingObjects) {
           price += topping.price;
        }
        return price;
    }
}

class Topping {
    constructor(topping) {
        this.title = topping.title;
        this.price = topping.price;
        this.calories = topping.calories;
    }
}

new Burger({'title': 'Большой', 'price': 100, 'calories': 40}, [{'title': 'Салат', 'price': 20, 'calories': 5}, {'title': 'Приправа', 'price': 15, 'calories': 0}, {'title': 'Майонез', 'price': 20, 'calories': 5}])