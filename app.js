const container = document.querySelector(".container");
const ul = document.querySelector(".todos-container");
const formSearch = document.querySelector('.form-search')



const addHidden = (inputValue, classAdd, classRemove ) => {
    Array.from(ul.children)
        .filter(li => !li.textContent.toLowerCase().includes(inputValue))
        .forEach(li => {
            li.classList.remove(classRemove)
            li.classList.add(classAdd)  
    })
}

const removeHidden = (inputValue, classAdd, classRemove ) => {
    Array.from(ul.children)
        .filter(li => li.textContent.toLowerCase().includes(inputValue))
        .forEach(li => {
            li.classList.remove(classRemove)
            li.classList.add(classAdd)  
    })
}

const addLis = (formValue) => {
    if (formValue.length) {
        ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${formValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
}
};



const ulChildren = formValue => 
ul.children.length <= 100 ? addLis(formValue) : ul.children[0].remove()

container.addEventListener("submit", (event) => {

    event.preventDefault();
const formValue = event.target.add.value.trim();
ulChildren(formValue)
    event.target.reset();

});

container.addEventListener("click", (event) => {
const classList = Array.from(event.target.classList).includes("delete");

    if (classList) {
    event.target.parentElement.remove();
    }
});

formSearch.addEventListener("input", (event) => {
const inputValue = event.target.value.trim().toLowerCase();
    addHidden(inputValue, "hidden", "d-flex");
    removeHidden(inputValue, "d-flex", "hidden");
});
