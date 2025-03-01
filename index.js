

//Global Variables
const h1PlayerInfo = document.querySelectorAll('.h1-info');
const divPlayerStatistics = document.querySelector('.div-player-statistics');
const divEnemyStatistics = document.querySelector('.div-enemy-statistics');
const buttonBuffSpell = document.querySelectorAll('#buff-spell');
const buttonDamageSpell = document.querySelectorAll('#damage-spell');
const divBattleWindow = document.querySelector('.div-battle-window');
const divPlayerEquip = document.querySelector('.div-player-equip-area');
const DivFamiliarContainer = document.querySelector('.div-familiar-container-list');
const DivOwnedFamiliarContainer = document.querySelector('.div-familiar-container-list-owned');
//Creating the wizard and setting up the multiplier for the spell powers and durations
let wizard = new PlayerClass(10, 10, 10, 10, 10, 10);
wizard.gold = 100;
// player span for gold, health, and mana
let spanPlayerGold = document.querySelector('.span-player-gold');
let spanPlayerHealth = document.querySelector('.span-player-health');
let spanPlayerMana = document.querySelector('.span-player-mana');
const skillSandStrike = new Skills('Sand Strike', 10, 'Swing your weapon and fling the sand from the ground at the enemy.');
const skillAdvancedSandStrike = new Skills('Advanced Sand Strike', 15, 'An improved version of the sand strike');
const skillsOverheadSandStrike = new Skills('Overhead Sand Strike', 25, 'Heave your sword behind your head and then swing it downward, bringing the ground with it.')
let familiarSandSkills = [skillSandStrike, skillAdvancedSandStrike, skillsOverheadSandStrike];//Im adding sand later
// global variables
let currentDifficulty = .5; //Current difficulty init
let currentPlayer = 0; //Current Player Init
// essence

// armor set and weapon set

        let playerWeaponSet = new weaponSet();
        let playerArmorSet = new armorSet();
// 


//Initializing starting familiar
let arrayPlayerChoices = [];


// This code needs to be here but is overwritten in the playerChoices.js to the starter for the particular player class. 
let startFamiliar = new Familiar('Filler', 'Fire', 'familiar1',10, 10, 10, 10, 10, 10, 10, familiarSandSkills, 10, 100);
startFamiliar.newImgPath = './images/familiars/starterPriestFamiliar.jpg';
let arrayPlayerFamiliars = [startFamiliar];


//Familiar global variables
let familiarNameArray = ['Godble', 'Jackson', 'JapBat', 'Squiggles', 'Razha', 'Yabado', 'Bobo'];
let familiarTypeArray = ['Water', 'Fire', 'Earth', 'Air', 'Light', 'Dark'];
//

let currentEnemy = null;
let currentFamiliar = startFamiliar;
currentFamiliar.generateAttackPower();
currentFamiliar.generateHealth();
currentFamiliar.generateAttackPower();
currentFamiliar.generateMana();
//Earth
const skillEarthStrike = new Skills('Earth Strike', 'Embue your weapon in Earth and strike enemy', 10)
const skillAdvancedEarthStrike = new Skills('Advanced Earth Strike', 'Improved version of Earth Strike', 10)
const skillEarthBlast = new Skills('Earth Blast', 'Summon a ball of Earth to propel towards enemy.', 10)
let familiarEarthSkills = [skillEarthStrike, skillAdvancedEarthStrike, skillEarthBlast];
//Air
const skillAirStrike = new Skills('Air Strike', 'Embue your weapon in Air and strike enemy', 10)
const skillAdvancedAirStrike = new Skills('Advanced Air Strike', 'Improved version of Air Strike', 10)
const skillAirBlast = new Skills('Air Blast', 'Summon a ball of Air to propel towards enemy.', 10)
let familiarAirSkills = [skillAirStrike, skillAdvancedAirStrike, skillAirBlast];
//Dark
const skillLightStrike = new Skills('Light Strike', 'Embue your weapon in fire and strike enemy', 10)
const skillAdvancedLightStrike = new Skills('Advanced Light Strike', 'Improved version of Light Strike', 10)
const skillLightBlast = new Skills('Light Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarLightSkills = [skillLightStrike, skillAdvancedLightStrike, skillLightBlast];
//Light
const skillDarkStrike = new Skills('Dark Strike', 'Embue your weapon in Dark and strike enemy', 10)
const skillAdvancedDarkStrike = new Skills('Advanced Dark Strike', 'Improved version of Dark Strike', 10)
const skillDarkBlast = new Skills('Dark Blast', 'Summon a ball of Dark to propel towards enemy.', 10)
let familiarDarkSkills = [skillDarkStrike, skillAdvancedDarkStrike, skillDarkBlast];    
//Fire
const skillFireStrike = new Skills('Fire Strike', 'Embue your weapon in fire and strike enemy', 10)
const skillAdvancedFireStrike = new Skills('Advanced Fire Strike', 'Improved version of Fire Strike', 10)
const skillFireBlast = new Skills('Fire Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarFireSkills = [skillFireStrike, skillAdvancedFireStrike, skillFireBlast];
//Water
const skillWaterStrike = new Skills('Water Strike', 'Embue your weapon in Water and strike enemy', 10)
const skillAdvancedWaterStrike = new Skills('Advanced Water Strike', 'Improved version of Water Strike', 10)
const skillWaterBlast = new Skills('Water Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarWaterSkills = [skillWaterStrike, skillAdvancedWaterStrike, skillWaterBlast];

for (let i = 0; i < 20; i++) {
    createFamiliarDiv(createRandomFamiliar(currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer, `./images/familiars/familiar${i}.jpg`)

}

// End of initializing starting familiar

//Creating the playable classes of the game.
createDifferentClasses('Priest', arrayPlayerChoices, './images/playerClass/priestProfile1.jpg');
createDifferentClasses('Fighter', arrayPlayerChoices, './images/playerClass/fighterProfile1.jpg');
createDifferentClasses('Wizard', arrayPlayerChoices, './images/playerClass/wizardProfile1.jpg');
createDifferentClasses('Assassin', arrayPlayerChoices, './images/playerClass/assassinProfile1.jpg');
// End of create the playable classes of the game.

//Initial Display
wizard = arrayPlayerChoices[0];
activatePlayerStatistics(wizard);
wizard.generateAttackPower();
displayPlayerClass(wizard, divPlayerStatistics)
// End of init
// Start of merchant 
let arrayPlayerInventory = []; // array that holds the player inventory
let arrayMerchantInventory = []; // array that holds the merchant inventory
const divPlayerInventory = document.querySelector('.div-inventory-container'); // selecting the player inventory div
const divMerchantInventory = document.querySelector('.div-item-container'); // selecting the merchant inventory div

let newItemHead = new Item('Starter Helmet', 'Head', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Helmet', false, 'images/hats/hat1.jpg', randomNumberMaker(5));

let newItemChest = new Item('Starter Chest', 'Chest', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Chest', false, 'images/breastPlate/breastplate1.jpg', randomNumberMaker(5));

let newItemWeaponR = new Item('Starter Weapon-R', 'Weapon-R', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Weapon-R', false, 'images/weapons/weapon1.jpg', randomNumberMaker(5));

let newItemWeaponL = new Item('Starter Weapon-L', 'Weapon-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Weapon-L', false, 'images/weapons/weapon2.jpg', randomNumberMaker(5));

let newItemRingR = new Item('Starter Ring-R', 'Ring-R', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-R', false, 'images/rings/rightRing1.jpg', randomNumberMaker(5));

let newItemRingL = new Item('Starter Ring-L', 'Ring-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-L', false, 'images/rings/leftRing1.jpg', randomNumberMaker(5));

let newItemBelt = new Item('Starter Belt', 'Belt', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Belt', false, 'images/belts/belt1.jpg', randomNumberMaker(5));

let newItemNecklace = new Item('Starter Necklace', 'Necklace', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Necklace', false, 'images/necklaces/necklace1.jpg', randomNumberMaker(5));

let newItemHands = new Item('Starter Hands', 'Hands', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Hands', false, 'images/gloves/gloves1.jpg', randomNumberMaker(5));

let newItemFeet = new Item('Starter Feet', 'Feet', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Feet', false, 'images/boots/boot1.jpg', randomNumberMaker(5));

// Unequip code
const allButtonsForUnequip = document.querySelectorAll('.button-unequip');
let allImagesForEquipSlots = document.querySelectorAll('.div-equip-item-image')

let itemSlots = [0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < allButtonsForUnequip.length; i++) {
    allButtonsForUnequip[i].addEventListener('click', () => {
        createItemDisplay(divPlayerInventory, itemSlots[i], wizard)
        allImagesForEquipSlots[i].style.backgroundImage = '';
        itemSlots[i] = 0;
    })
}
// end of unequip code

//Creating the items to push into the merchant array
createMerchantItem(newItemHead, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemWeaponL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemWeaponR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemChest, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemBelt, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemNecklace, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemRingR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemRingL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemHands, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemFeet, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
//End of Merchant Code.

// Start of reward code
const allRewardChestImages = ['./images/rewardChests/chest1.jpg', './images/rewardChests/chest2.jpg', './images/rewardChests/chest3.jpg', './images/rewardChests/chest4.jpg']
let rewardBox = document.querySelector('.reward-box')
remove_reward_button.addEventListener('click', () => {
    let rewardsContent = document.querySelectorAll('.reward-content')
    rewardsContent.forEach((rewardContent) => {
        rewardContent.classList.remove('hide')
    })
})
// End of reward code


function checkForEndOfBattle() {
    document.querySelector('.battle-overlay').classList.add('hide');
    winCount += 1;
    giveReward(currentEnemy);
    rewardBox.style.backgroundImage = `url('${allRewardChestImages[Math.floor(Math.random() * 3) + 1]}')`
    h1MenuItemsAll.forEach((item) => {
        item.classList.remove('hide');
    });
    let rewards = document.querySelectorAll('.reward-content')
    rewards.forEach((reward) => {
        reward.classList.remove('hide')
    })
    document.querySelector('.div-map-container').classList.remove('hide');
    div_reward_container.classList.remove('hide');
    document.querySelector('body').classList.add('over-flow');
    wizard.levelUp()
    wizard.generateHealth();
    wizard.generateMagicPower()
    currentFamiliar.generateMagicPower()
    currentFamiliar.generateAttackPower();
    currentFamiliar.level = wizard.level;
    spanPlayerGold.innerText = wizard.gold;
    currentDifficulty += .5
    displayPlayerClass(wizard, document.querySelector('.div-player-statistics'));
}

//End of the battle section

let rewardGold = 5;
let arrayTestMonsters = [];

let winCount = 0; //Increases the difficulty for each map slot completed (map -> battle)

const pAllBattleRewards = document.querySelectorAll('.p-battle-rewards')
const divsForHidingMainContainers = document.querySelectorAll('.overflow-hide')

hide_all_divs(divsForHidingMainContainers)
let reward_level = 1

let allMapSlots = document.querySelectorAll('.map-square');
allMapSlots.forEach((mapSlot) => {   //Putting the map slots on the map and initiating the battle
    arrayTestMonsters = []

    mapSlot.addEventListener('click', () => {
        reward_level += 1
        let newMonster = createRandomEnemies(() => {
            let reward0 = randomNumberMaker(1000) + (randomNumberMaker(5) * reward_level);
            wizard.gold += reward0
            display_end_of_battle_rewards_p_change(pAllBattleRewards, reward0)
        }, (currentDifficulty), arrayTestMonsters, mapLevel);
        currentEnemy = newMonster;
        document.querySelector('.div-map-container').classList.add('hide')
        initiateBattle();
        h1MenuItemsAll.forEach((item) => {
            item.classList.add('hide');
        });
    });
});


let playerLevel = 0;
let mapLevel = 1; //The level of the map
//End of the map section44



    
