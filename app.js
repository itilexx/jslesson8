const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todolist = document.querySelector('#todo_list')

const createTodo = () => {
if(!input.value.trim()){
    input.value = ''
    return false
}else {


    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divsButton = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    div.setAttribute('class','block_text')
    deleteButton.setAttribute('class','delete_button')
    editButton.setAttribute('class','edit_button')
    divsButton.setAttribute('class', 'divsButton')

    text.innerHTML = input.value
    deleteButton.innerHTML = 'delete'
    editButton.innerHTML='edit'

    divsButton.append(deleteButton,editButton)
    div.append(text,divsButton)
    todolist.prepend(div)

    deleteButton.onclick = () => div.remove();
    editButton.onclick = () => {
        const newTodo = prompt('Edit Todo:', text.textContent);
        if (newTodo !== null && newTodo !== '') {
          text.textContent = newTodo;
        }
      };    
     
}    
    return input.value = ''
}

createButton.onclick = () => createTodo();

window.addEventListener('keydown', ()=> { 
    if (event.code === 'Enter') createTodo()
})

//классы 

class  Animal {
    constructor(name,color){
        this.name = name
        this.color = color

    }
}

class Dog extends Animal {
    constructor(name,height){
        super(name)
    }
    
    speak(){
        console.log('${this.name} лает')
    }
}
let dog = new Dog ('Шарик')
dog.speak

class cas extends Animal{
    constructor(){
        super();   
    }
}