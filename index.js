let save = document.getElementById('save');
let toDo = document.getElementById('toDo');
save.addEventListener('click',()=>{
   let inputValue = input.value;
   let paragraph = document.createElement;
   paragraph.TextContent = inputValue;
   toDo.appendChild(paragraph);
   input.value = '';
});
   


