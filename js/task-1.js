const categories = document.querySelector("ul#categories");

const countNestedElements = categories.children.length;
console.log(`Number of categories: ${countNestedElements}`);



const list = document.querySelectorAll("li.item");

list.forEach(item => { console.log(
    `Category: ${item.querySelector("h2").textContent}\nElements: ${item.querySelectorAll("li").length}`
);
});