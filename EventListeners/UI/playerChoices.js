//Establishing the player classes that will end up being the wizard object.
const divPlayerClassChoices = document.querySelectorAll('.div-player-choice');
const imgForClass = document.querySelector('.div-player-image')
const divContainerPlayerSide = document.querySelector('.div-container-player-side-img')
const allStartClassChoiceImages = document.querySelectorAll('.div-class-image');
//display the images for the different classes
allStartClassChoiceImages[0].style.backgroundImage = `url(${'./images/playerClass/priestProfile1.jpg'})`
allStartClassChoiceImages[1].style.backgroundImage = `url(${'./images/playerClass/fighterProfile1.jpg'})`
allStartClassChoiceImages[2].style.backgroundImage = `url(${'./images/playerClass/wizardProfile1.jpg'})`
allStartClassChoiceImages[3].style.backgroundImage = `url(${'./images/playerClass/assassinProfile1.jpg'})`

function bundleClassChoiceBases(){ //all the events use these lines regardless so I just abstracted them to this function.
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
}


divPlayerClassChoices[0].addEventListener('click', () => {
    wizard = arrayPlayerChoices[0];
    wizard.class = "Priest";
    bundleClassChoiceBases()
    document.querySelector('.div-player-image').src = wizard.imgForClass;
    arrayPlayerFamiliars[0] = new Familiar('Blaze', 'Fire', 'familiar1',10, 10, 10, 10, 10, 10, 10, familiarSandSkills, 10, 100);
    arrayPlayerFamiliars[0].newImgPath = './images/familiars/starterPriestFamiliar.jpg';
    createPlayerFamiliarDiv(arrayPlayerFamiliars[0], document.querySelector('.div-familiar-container-list-owned'), './images/familiars/starterPriestFamiliar.jpg')
});

divPlayerClassChoices[1].addEventListener('click', () => {
    wizard = arrayPlayerChoices[1];
    wizard.class = "Fighter";
    document.querySelector('.div-player-image').src = wizard.imgForClass;
    arrayPlayerFamiliars[0] = new Familiar('Dash', 'Lightening', 'familiar1',10, 10, 10, 10, 10, 10, 10, familiarSandSkills, 10, 100);
    arrayPlayerFamiliars[0].newImgPath = './images/familiars/startWarriorFamiliar.jpg';
    createPlayerFamiliarDiv(arrayPlayerFamiliars[0], document.querySelector('.div-familiar-container-list-owned'), './images/familiars/starterWarriorFamiliar.jpg')
    bundleClassChoiceBases()
});

divPlayerClassChoices[2].addEventListener('click', () => {
    wizard = arrayPlayerChoices[2];
    wizard.class = "Wizard";
    document.querySelector('.div-player-image').src = wizard.imgForClass;
    arrayPlayerFamiliars[0] = new Familiar('Poisonaro', 'Poison', 'familiar1',10, 10, 10, 10, 10, 10, 10, familiarSandSkills, 10, 100);
    arrayPlayerFamiliars[0].newImgPath = './images/familiars/starterWizardFamiliar.jpg';
    createPlayerFamiliarDiv(arrayPlayerFamiliars[0], document.querySelector('.div-familiar-container-list-owned'), './images/familiars/starterWizardFamiliar.jpg')
    bundleClassChoiceBases()
});

divPlayerClassChoices[3].addEventListener('click', () => {
    wizard = arrayPlayerChoices[3];  
    wizard.class = "Assassin";
    document.querySelector('.div-player-image').src = wizard.imgForClass;
    arrayPlayerFamiliars[0] = new Familiar('Shard', 'Ice', 'familiar1',10, 10, 10, 10, 10, 10, 10, familiarSandSkills, 10, 100);
    arrayPlayerFamiliars[0].newImgPath = './images/familiars/startAssassinFamiliar.jpg';
    createPlayerFamiliarDiv(arrayPlayerFamiliars[0], document.querySelector('.div-familiar-container-list-owned'), './images/familiars/starterAssassinFamiliar.jpg')
    bundleClassChoiceBases()
});

