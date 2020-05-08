

let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let input = document.querySelector('input');


addButton.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;

});

subtractButton.addEventListener('click', () =>{
    input.value = parseInt(input.value) -1;
    
})


const change = () => {
    let cur = document.querySelector('input').value;

    document.getElementById('current').innerHTML = cur;

}