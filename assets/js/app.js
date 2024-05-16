const cl =console.log;


const todoform = document.getElementById("todoform");
const todolist = document.getElementById("todolist");
const todoitemcontrol = document.getElementById("todoitem");

const todoarray = [
{
	todoItem: "javascript",
	todoId: "123"
}

]

const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const createtodolist = (arr) => {
	let result = ` `;
	  
	arr.forEach(todo => {
		
	result += `<li class="list-group-item" id="${todo.todoId}">${todo.todoItem}</li>`
	})
	
   todolist.innerHTML = result;
}

createtodolist(todoarray);


const Onsubmitform = (eve) =>{
	
	eve.preventDefault();
	
	let newtodo = {
		
		todoItem : todoitemcontrol.value,
		todoId   : generateUuid()
		
	}
	
	todoarray.unshift(newtodo)
	cl(todoarray);
	createtodolist(todoarray);
	todoform.reset();
}




todoform.addEventListener("submit", Onsubmitform);