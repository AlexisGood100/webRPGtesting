const textboxInstructions = document.querySelector('.textbox-instructions');
const buttonInstructionsAll = document.querySelectorAll('.button-instructions');

buttonInstructionsAll[0].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[0];
})
buttonInstructionsAll[1].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[1];
})
buttonInstructionsAll[2].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[2];
})
buttonInstructionsAll[3].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[3];
})
buttonInstructionsAll[4].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[4];
})



let instructionsForMerchant = 'Purchase an item and it will go to your inventory.';
let instructionsForMap = 'Explore Map by clicking on individual levels. Battle and earn rewards.';
let instructionsForFamiliars = 'Buy Familiars.';
let instructionsForEquipArea = 'Unequip Items.';
let instructionsForInventory = 'Equip or Sell Item.';

let allOptionsText = [instructionsForMerchant, instructionsForMap, instructionsForFamiliars,
instructionsForEquipArea, instructionsForInventory
]; 
