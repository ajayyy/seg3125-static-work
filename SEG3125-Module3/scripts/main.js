
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].classList.remove("visibleTab");
		tabcontent[i].parentElement.style.removeProperty("max-height");
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	const tab = document.getElementById(tabName);
	const padding = 12 * 2 + 40;
	tab.parentElement.style.maxHeight = tab.clientHeight + padding + "px";
	tab.classList.add("visibleTab");

	const button = document.getElementById(tabName + "Tab");
	button.classList.add("active");
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(checkbox) {
    var s2 = document.getElementById('displayProduct');
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, checkbox);
	if (!checkbox) {
		// Load restrictions data into checkboxes
		const checkboxes = document.querySelectorAll("#dietRestrictions > label > input");
		for (const checkbox of checkboxes) {
			checkbox.checked = restrictions[checkbox.value];
		}
	}

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {

		const row = document.createElement("tr");
			
		const productData = document.createElement("td");
		const productName = optionArray[i].name; 
		// create the checkbox and add in HTML DOM
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		productData.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		const label = document.createElement('label')
		label.addEventListener("click", () => checkbox.click());
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		productData.appendChild(label);
		row.appendChild(productData);

		const priceData = document.createElement("td");
		priceData.appendChild(document.createTextNode("$" + optionArray[i].price.toFixed(2)));
		row.appendChild(priceData);

		const stockData = document.createElement("td");
		stockData.appendChild(document.createTextNode(optionArray[i].remaining + " left"));
		row.appendChild(stockData);

		s2.appendChild(row);    
	}

	selectedItems();
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	const productList = document.getElementsByName("product");
	const chosenProducts = Array.from(productList).filter((checkbox) => checkbox.checked);
	const chosenNames = chosenProducts.map((elem) => elem.value);
	window.localStorage.setItem("chosenNames", chosenNames);

	const c = document.getElementById('displayCart');
	c.innerHTML = "";

	const emptyCart = document.getElementById("emptyCart");
	if (chosenProducts.length > 0) {
		emptyCart.classList.add("hidden");
	} else {
		emptyCart.classList.remove("hidden");
		return;
	}
	
	// build list of selected item
	const para = document.createElement("p");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));

	const table = document.createElement("table");
	para.appendChild(table);
	chosenProducts.forEach((checkbox) => {
		const row = document.createElement("tr");
		table.appendChild(row);

		const nameData = document.createElement("td");
		nameData.appendChild(document.createTextNode(checkbox.value));
		row.appendChild(nameData);

		const priceData = document.createElement("td");
		priceData.appendChild(document.createTextNode("$" + getProduct(checkbox.value).price.toFixed(2)));
		row.appendChild(priceData);
	});

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenNames).toFixed(2)));
}

function orderForLaterCheckbox(element) {
	const container = document.getElementById("order-for-later");

	if (element.checked) {
		container.classList.remove("hidden");
	} else if (!container.classList.contains("hidden")) {
		container.classList.add("hidden");
	}
}

// Preload default list
populateListProductChoices(null);
openInfo('PersonalData');