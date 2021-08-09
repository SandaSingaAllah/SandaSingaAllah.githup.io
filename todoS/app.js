const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')
//create function to generate html template
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between
align-items-center">

            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
list.innerHTML += html;
}
addForm.addEventListener('submit', e=> {
    //stop the page from reload
    e.preventDefault();

    //get the value from input type "Add"
    const todo = addForm.add.value.trim();
    if (todo.length) {
        //call the function
        generateTemplate(todo);
        addForm.reset();
}
//contains digunakan untuk mengecek apakah ada class delete ketika di click
list.addEventListener('click', e=> {
    if (e.target.classList.contains('delete')) {
        //hapus <li> tag
        e.target.parentElement.remove();
        }
    })
})
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};
search.addEventListener('keyup', () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
})
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)