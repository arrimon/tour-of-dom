// add
console.log('Come from add js')
// const newHeaderCreate = document.createElement('h2');
// newHeaderCreate.innerText = "Hello Bangladesh"
// console.log(newHeaderCreate)

// Select specefic ID
const mainContainer = document.getElementById('main');
// console.log(mainContainer);

// Create Sections
const newSectionCreate = document.createElement('section');
// console.log(newSectionCreate);

// Create H2
const h2 = document.createElement('h2');
h2.innerText = "Hello Bangladesh"
h2.style.color = "Thistle"
// console.log(h2);

const ul = document.createElement('ul')
const li = document.createElement('li')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li.innerText = 'Dhaka';
li1.innerText = 'Cumilla';
li2.innerText = 'Barishal';
li3.innerText = 'Chittagong';

// section added under main container
mainContainer.appendChild(newSectionCreate)

// h2 added under section
newSectionCreate.appendChild(h2)
newSectionCreate.appendChild(ul)
ul.appendChild(
   li,
   li1,
   li2,
   li3
)
ul.appendChild(
   li
)
ul.appendChild(
   li1
)
ul.appendChild(
   li2
)
ul.appendChild(
   li3
)

const bookSection = document.createElement('section');
mainContainer.appendChild(bookSection)

bookSection.innerHTML = `
<h2>Book I want to read</h2>
<ul>
    <li>Dopamin Detox</li>
    <li>Rich Dad Poor Dad</li>
    <li>Money Management</li>
</ul>
`