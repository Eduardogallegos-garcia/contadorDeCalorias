const addEntryButton=document.getElementById('add-entry');
const entryDropdown=document.getElementById('entry-dropdown');
function addEntry(){
    alert("hola")
    const targetInputContainer=document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber=targetInputContainer.querySelectorAll()
    const HTMLinsert=`<label>Prueba</label>`;
    targetInputContainer.innerHTML+=HTMLinsert;
}
addEntryButton.addEventListener("click",addEntry);