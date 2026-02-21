const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("btn");

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);

button.addEventListener("click", listener);

function listener(event) {
    // console.log(this.currentTarget);
    console.log(this.tagName);
    // console.log(this);
}