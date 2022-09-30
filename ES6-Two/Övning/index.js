class Refrigerator {
    constructor(name, date, category, amount) {
        this.name = name;
        this.date = date;
        this.category = category;
        this.amount = amount;
        this.removed = false;
    }
}
const refrigeratorItems = new Map();

const submitForm = (event) => {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    if (refrigeratorItems.has(productName)) {
        alert(`The product ${productName} already exist in the Refrigerator`)
        return;
    }
    const experationDate = document.getElementById("experationDate").value;
    const productCategory = document.getElementById("productCategory").value;
    const productAmount = document.getElementById("productAmount").value;
    const item = new Refrigerator(productName, experationDate, productCategory, productAmount);
    refrigeratorItems.set(productName, item);
    renderItem([...refrigeratorItems]);
}
const filterData = (category) => {
    const filteredList = [...refrigeratorItems].filter((x) => category !== "" ? x[1].category === category && !x[1].removed : !x[1].removed)
    renderItem(filteredList);
}

const renderItem = (list) => {
    const dataElement = document.getElementById("data");
    dataElement.innerHTML = '';
    list.forEach((value) => {
        if (!value[1].removed) {
            const card = document.createElement("DIV");
            card.setAttribute("class", "card");

            const remove = document.createElement("div");
            remove.appendChild(document.createTextNode("X"));
            remove.setAttribute("class", "remove");
            remove.addEventListener("click", () => {
                refrigeratorItems.get(value[0]).removed = true
                remove.parentNode.remove();
            })
            card.appendChild(remove);

            const category = document.createElement("span");
            category.appendChild(document.createTextNode(value[1].category));
            category.setAttribute("class", "category-item");
            card.appendChild(category);

            const name = document.createElement("span");
            name.appendChild(document.createTextNode(value[1].name));
            card.appendChild(name);

            const amount = document.createElement("span");
            amount.appendChild(document.createTextNode(value[1].amount));
            card.appendChild(amount);

            const date = document.createElement("span");
            date.appendChild(document.createTextNode(value[1].date));
            card.appendChild(date);

            dataElement.appendChild(card);
        }
    })
}