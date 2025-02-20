const caloriesCounter=document.getElementById('calories-counter');
const budget=document.getElementById('budget');
const entry=document.getElementById('entry');
const addEntry=document.getElementById('add-entry');
const clear=document.getElementById('clear');
const output=document.getElementById('output');

let isError=false;

function addNexEntry(){
    const targetInputContainer=document.querySelector(`#${entry.value} .input-container`);
    insertHTML=`<label>Esto es una prueba</label>`
    targetInputContainer.insertAdjacentHTML('beforeend',insertHTML);
}

addEntry.addEventListener("click",addNexEntry);