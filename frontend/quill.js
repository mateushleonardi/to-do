
let toolbarOptions = [
    
  ["bold","italic","underline"],
  [{ 'header': [1,2,3,4,5,false]}],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{script:'sub'},{script:'super'}],

]


let quill = new Quill('#editor', {
  modules:{
    toolbar:toolbarOptions,
  },
  
  theme: 'snow'
}); 

let toolbarOptions2 = [
    
  ["bold","italic","underline"],
  [{ 'header': [1,2,3,4,5,false]}],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{script:'sub'},{script:'super'}],

]


let quill2 = new Quill('#editor2', {
  modules:{
    toolbar:toolbarOptions,
  },
  
  theme: 'snow'
}); 

let toolbarOptions3 = [
    
  ["bold","italic","underline"],
  [{ 'header': [1,2,3,4,5,false]}],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{script:'sub'},{script:'super'}],

]


let quill3 = new Quill('#editor3', {
  modules:{
    toolbar:toolbarOptions,
  },
  
  theme: 'snow'
}); 

document.addEventListener('DOMContentLoaded', function() {
  let save = document.getElementById('save');
  save.addEventListener('click', function() {
    let content = quill.root.innerHTML;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Conteúdo salvo com sucesso!');
      } else {
        console.error('Erro ao salvar o conteúdo:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Erro ao fazer a requisição para salvar o conteúdo.');
    };
    xhr.send(JSON.stringify({ content: content }));
  });
});


