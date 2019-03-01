let inputs = document.getElementById('inputTxt');
let counter = document.getElementById('counterTxt');

let text = '';

inputs.addEventListener('keyup', count);

function count(e) {

    let len = Number(e.target.value);

    if (!isNaN(len)) {

        if ((len == 0)) {
            text = `<small class="text-primary">0</small>`;
        } else if ((len > 0) && (len < 10)) {
            // 0 - 9
           text = `<small class="text-primary">1</small>`;
        } else if ((len > 9) && (len < 100)) {
            // 10 - 99
            text = `<small class="text-success" >2</small>`;
        } else if ((len > 99) && (len < 1000)) {
            // 100 - 999
            text = `<small class="text-warning" >3</small>`;
        } else {
            // 1 000 - infinite
            text = `<small class="text-danger" > numero mayor a 4 cifras</small>`;
        } 

        console.log(len);

        counter.innerHTML = text;
        
    }

}