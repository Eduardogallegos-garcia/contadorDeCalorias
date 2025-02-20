const caloriesCounter=document.getElementById('calories-counter');
const budget=document.getElementById('budget');
const entry=document.getElementById('entry');
const addEntry=document.getElementById('add-entry');
const clear=document.getElementById('clear');
const output=document.getElementById('output');

let isError=false;

function addNexEntry(){
    const targetInputContainer=document.querySelector(`#${entry.value} .input-container`);
    const countInputContainer=targetInputContainer.querySelectorAll('input[type="text"]').length+1;

    console.log(countInputContainer);
    insertHTML=`<label for="${entry.value}-${countInputContainer}-name"> ${entry.value} ${countInputContainer} Name</label>
    <input type="text" id="${entry.value}-${countInputContainer}-name" placeholder="Name">
    <label for="${entry.value}-${countInputContainer}-calories">${entry.value} ${countInputContainer} Calories</label>
    <input id="${entry.value}-${countInputContainer}-calories" type="number" min="0" placeholder="Calories">`
    targetInputContainer.insertAdjacentHTML('beforeend',insertHTML);
}
function calculateCalories(e){
    e.preventDefault();
    const listInputCaloriesBreakfast=document.querySelectorAll("#breakfast input[type='number']");    
    const totalCaloriesBreakfas=getCaloriesFromInputs(listInputCaloriesBreakfast);
    const listInputCaloriesLunch=document.querySelectorAll("#lunch input[type='number']");
    const totalCaloriesLunch=getCaloriesFromInputs(listInputCaloriesLunch);
    const listInputCaloriesDinner=document.querySelectorAll("#dinner input[type='number']");
    const totalCaloriesDinner=getCaloriesFromInputs(listInputCaloriesDinner);
    const listInputCaloriesSnacks=document.querySelectorAll("#snacks input[type='number']");
    const totalCaloriesSnacks=getCaloriesFromInputs(listInputCaloriesSnacks);
    const listInputCaloriesExercise=document.querySelectorAll("#exercise input[type='number']");
    const totalCaloriesExercise=getCaloriesFromInputs(listInputCaloriesExercise);
    const totalBudget=getCaloriesFromInputs([budget]);
    const sumCalories=totalCaloriesBreakfas+totalCaloriesLunch+totalCaloriesDinner+totalCaloriesSnacks;
    const remainingCalories=totalBudget-sumCalories+totalCaloriesExercise;
    const surplusOrDeficit=remainingCalories<0 ?'Surplus ': 'Deficit';
   
    output.innerHTML=`
    <span>${Math.abs(remainingCalories)} calories ${surplusOrDeficit}</span>
    <p>Presupuesto de calorias ${totalBudget}</p>
    <p>Calorias consumidas ${sumCalories}</p>
    <p>Calorias quemadas ${totalCaloriesExercise}</p>`

    output.classList.remove('hide');

}
function clearInput(){
    const inputContainer=Array.from(document.querySelectorAll('.input-container'));
    for(const content of inputContainer){
        content.innerHTML='';
    }
    budget.value='';
    output.innerText='';
    output.classList.add('hide');

}
function getCaloriesFromInputs(list){
    let calories=0;
    for(const item of list){
        calories+=Number(item.value);
    }
    return calories;
}

addEntry.addEventListener("click",addNexEntry);
caloriesCounter.addEventListener("submit", calculateCalories);
clear.addEventListener('click',clearInput);