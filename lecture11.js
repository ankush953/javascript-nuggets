// create empty array of length 120
const emptyArr = Array.from({length: 120})

// selecting from document. 
const textSegs = document.querySelectorAll(".text");

// not an array. we can use Array.from 
console.log(textSegs);

// an array now
const arrText = Array.from(textSegs);
const indexes = arrText.find((item, index) => {
    console.log(index)
    return (item.textContent === "text 2");
});

console.log(arrText);

console.log(indexes);

const items = Array.from({length:120}, (item, index) => {
    return index;
})


const itemsPerPage = 14;

const numberOfPages = Math.ceil(items.length / itemsPerPage);

const pages = Array.from({length: numberOfPages}, (item, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
})

console.log(items);
console.log(pages);