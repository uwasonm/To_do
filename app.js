import Item from"./item.js";

//console.log(window);

((todo) =>{
const items = document.querySelector('#toDoItems');
//console.log(items);

todo.additem = funcion(e)
{
e.preventDefault();
const input = this['todoInput'];
//console.log(input);
addItemTODOM(new Item(input, false))
input.value='';
}

function addItemTODOM(){
    items.insertAdjacentHTML ('beforeend',
    
<li class="list-group-item ${item.Ischecked ? 'change': ''}">
${item.text}
<button class="btn btn-danger">x</button>
</li>);
let lastchild = items.lastElementChild;
lastchild.addEventListener('click', change);
lastchild.querySelector('button').addEventListener('click', remove);
}

function change(){
    this.classList.toggle('change');
}
function remove(){
    this.parentElement.remove();
}


todo.save = function(){
    let items = documetn.querySelectorAll('li');
    let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent,
i.classlist.contains('change')));
localStorage.setItem('items', JSON.stringify(res));
}

todo.load = function(){
let res = JSON.parse(localStorage.getItem('items'));
console.log(res);
res.forEach(i => addItemTODOM(i));
}

})(window.todo = window.todo||{});

document.querySelector('#todoform').addEventListener('submit' , todo.addItem);
document.querySelector('#save').addEventListener('click', todo.save);
document.querySelector('#load').addEventListener('click', todo.load);