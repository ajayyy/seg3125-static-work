	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		noLactose: true,
		noNuts: true,
		organic: false,
		price: 1.99,
		remaining: 15
	},
	{
		name: "Brocoli (Organic)",
		noLactose: true,
		noNuts: true,
		organic: true,
		price: 1.99,
		remaining: 10
	},
	{
		name: "Bread (Organic)",
		noLactose: true,
		noNuts: true,
		organic: true,
		price: 2.35,
		remaining: 8
	},
	{
		name: "Salmon",
		noLactose: true,
		noNuts: true,
		organic: false,
		price: 10.00,
		remaining: 2
	},
	{
		name: "Yogurt",
		noLactose: false,
		noNuts: true,
		organic: true,
		price: 3.10,
		remaining: 4
	},
	{
		name: "Yogurt Parfait",
		noLactose: false,
		noNuts: false,
		organic: true,
		price: 5.20,
		remaining: 6
	},
	{
		name: "Peanut Butter (100%)",
		noLactose: true,
		noNuts: false,
		organic: false,
		price: 6.20,
		remaining: 25
	},
	{
		name: "Bacon",
		noLactose: true,
		noNuts: true,
		organic: false,
		price: 1.00,
		remaining: 30
	},
	{
		name: "Carrot",
		noLactose: true,
		noNuts: true,
		organic: false,
		price: 0.50,
		remaining: 12
	},
	{
		name: "Carrot (Organic)",
		noLactose: true,
		noNuts: true,
		organic: true,
		price: 0.50,
		remaining: 1
	},
	{
		name: "Cheese",
		noLactose: false,
		noNuts: true,
		organic: false,
		price: 4.00,
		remaining: 14
	},
	{
		name: "Cheese (Organic)",
		noLactose: false,
		noNuts: true,
		organic: true,
		price: 4.00,
		remaining: 7
	},
	{
		name: "Assorted Peanuts",
		noLactose: true,
		noNuts: false,
		organic: false,
		price: 4.00,
		remaining: 41
	},
	{
		name: "Banana",
		noLactose: true,
		noNuts: true,
		organic: false,
		price: 4.00,
		remaining: 17
	},
	{
		name: "Banana (Organic)",
		noLactose: true,
		noNuts: true,
		organic: true,
		price: 4.00,
		remaining: 23
	}
];

let restrictions = {
	noLactose: false,
	noNuts: false,
	organic: false
}
if (localStorage.getItem("restrictions")) {
	try {
		restrictions = JSON.parse(localStorage.getItem("restrictions"));
	} catch(e) {}
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, checkbox) {
	if (checkbox) restrictions[checkbox.value] = checkbox.checked;
	window.localStorage.setItem("restrictions", JSON.stringify(restrictions));

	return prods.filter((elem) => (!restrictions.noLactose || elem.noLactose)
									&& (!restrictions.noNuts || elem.noNuts)
									&& (!restrictions.organic || elem.organic))
				.sort((a, b) => a.price - b.price);
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function getProduct(chosenProduct) {
	return products.find((elem) => elem.name === chosenProduct);
}