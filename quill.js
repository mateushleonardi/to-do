
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


/*const Parchment = Quill.import('parchment');

const options = {
    placeholder: 'O que você precisa fazer?',
    theme: 'snow',
}



const Delta = Quill.import('delta');
quill.setContents(
  new Delta()
    .insert({ italic: true })
    .insert({ bold: false })
  
);
*/
