const Parchment = Quill.import('parchment');


const options = {
    placeholder: 'O que você precisa fazer?',
    theme: 'snow',
}

const quill = new Quill('#editor', {
  formats: ['italic'],
});

const Delta = Quill.import('delta');
quill.setContents(
  new Delta()
    .insert('Only ')
    .insert('italic', { italic: true })
    .insert(' is allowed. ')
    .insert('Bold', { bold: true })
    .insert(' is not.')
);

