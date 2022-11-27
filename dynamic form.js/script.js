let form = document.getElementById('form');

function add(){
    let newField = document.createElement('input')
    newField.setAttribute('type', 'text');
    newField.setAttribute('type', 'text');
    newField.setAttribute('placeholder', 'Optional');
    form.appendChild(newField);
}
function remove(){
    let input = form.getElementsByTagName('input');
    if(input.length > 2){
        form.removeChild(input[(input.length-1)])
    }
}