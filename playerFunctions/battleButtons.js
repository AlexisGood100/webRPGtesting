const buttonPlayerBattleControls = document.querySelectorAll('.button-player-control');
const mapLevelHTML = document.querySelector('.h1-map-level');
const imgForBattlePlayerAndFamiliar = document.querySelector('.div-player-background-img');

let usingAlt = false;
//basic attack

function makeMoveHavePower(multiplier){
    return wizard.attackPower * multiplier
}




const doDamageBasic = (wizard, currentEnemy, indicator) =>{
indicator === 1 ? currentEnemy.health -= wizard.attackPower
: wizard.health -= currentEnemy.attackPower
    
}


const setDelay = (time, next) =>{
    setTimeout(()=>{
next()
    }, time * 1000) //conversion straight to seconds in parameters
}

const setStatusHit = (element) =>{
    element === document.querySelector('div-player-background-img') ?
    document.querySelector('.div-player-background-img').classList.add('struck')
    : document.querySelector('.div-enemy-background-img').classList.add('struck')
} 

const removeStatusHit = (element) =>{
    setDelay(1200, ()=>{
        element.class.remove('struck');
    })
}


const displayAllClassesPlayerAndEnemy = (wizard, currentEnemy) => {
    displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
}

buttonPlayerBattleControls[0].addEventListener('click', ()=>{
    if(usingAlt === false){
        doDamageBasic(wizard, currentEnemy,1)
        setStatusHit(document.querySelector('.div-enemy-background-img'))
        removeStatusHit(document.querySelector('.div-enemy-background-img'))
        wizard.health -= currentEnemy.attackPower;
        
        if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        setDelay(1.5, ()=>{
            displayAllClassesPlayerAndEnemy(wizard, currentEnemy)
        })
    } else {
        doDamageBasic(wizard, currentEnemy,2)
        if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        setDelay(1.5, ()=>{
            displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
            displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        })
        checkForEndOfBattle();
    }
})

buttonPlayerBattleControls[1].addEventListener('click', ()=>{ //defense
    if(usingAlt === false){
        wizard.defense += 10;
        wizard.health -= currentEnemy.attackPower;
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        setTimeout(()=>{
            wizard.defense -= 10;
            displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        }, 5000)
    } else {
        setTimeout(()=>{
            currentFamiliar.defense += 10;
            displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        })
    }
})

buttonPlayerBattleControls[2].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= makeMoveHavePower(2.5);
                    wizard.health -= currentEnemy.attackPower;
        if(wizard.class === 'Priest'){
            currentEnemy.health -= makeMoveHavePower(1.6);
                    wizard.health -= currentEnemy.attackPower;
        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -= makeMoveHavePower(2.6);
                    wizard.health -= currentEnemy.attackPower;
             
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -= makeMoveHavePower(2.6);
                    wizard.health -= currentEnemy.attackPower;
        }
            setStatusHit(document.querySelector('.div-enemy-background-img'))
            removeStatusHit(document.querySelector('.div-enemy-background-img'))
    }else if(currentEnemy.health <= 0){
                checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
            }
            displayAllClassesPlayerAndEnemy(wizard, currentEnemy)
        } else {
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);   
            displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
            displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
        }
        if(currentEnemy.health <= 0){
            checkForEndOfBattle();
            mapLevel += 1;
            mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
    }
})

buttonPlayerBattleControls[3].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= makeMoveHavePower(3.9);
               
        }
        if(wizard.class === 'Priest'){
            currentEnemy.health -= makeMoveHavePower(3.6);;
              
                
        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -= makeMoveHavePower(3.6);
            
               
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -= makeMoveHavePower(3.5);
        }
            checkForEndOfBattle();
            mapLevel += 1;
            mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        if(currentEnemy.health > 0){
            displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
        } 
    } else {

        if(currentFamiliar.fight_type === 'Fire'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
           
        
        }
        if(currentFamiliar.fight_type === 'Water'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                
               
        }
        if(currentFamiliar.fight_type === 'Earth'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                
                
        }
        if(currentFamiliar.fight_type === 'Air'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  

        } if(currentFamiliar.fight_type === 'Darkness'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            
        }
        if(currentFamiliar.fight_type === 'Light'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
          
        }
    if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
            displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        
    }
})


buttonPlayerBattleControls[4].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= makeMoveHavePower(5.6);
                    wizard.health -= currentEnemy.attackPower; 

        }
        if(wizard.class === 'Priest'){
            currentEnemy.health -= makeMoveHavePower(5.6);
                    wizard.health -= currentEnemy.attackPower;        

        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -= makeMoveHavePower(5.6)
                    wizard.health -= currentEnemy.attackPower;
            
   
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -= makeMoveHavePower(5.6)
                    wizard.health -= currentEnemy.attackPower;


        } if(currentEnemy.health <= 0){
            checkForEndOfBattle();
            mapLevel += 1;
            mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        setStatusHit(document.querySelector('.div-enemy-background-img'))
        removeStatusHit(document.querySelector('.div-enemy-background-img'))
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    } else {
        if(currentFamiliar.fight_type === 'Fire'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                
 
        }
        if(currentFamiliar.fight_type === 'Water'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                 
 
        }
        if(currentFamiliar.fight_type === 'Earth'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
              

        }
        if(currentFamiliar.fight_type === 'Air'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
      

        } if(currentFamiliar.fight_type === 'Darkness'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
         
        }
        if(currentFamiliar.fight_type === 'Light'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                
                 
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
        
    }
})

buttonPlayerBattleControls[5].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.healthPotions >= 1){
            wizard.healthPotions -= 1;
            wizard.generateHealth();
        }

    } else {
        if(wizard.healthPotions >= 1){
            currentFamiliar.healthPotions -= 1;
            currentFamiliar.generateHealth();
            displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        }
    }
})

buttonPlayerBattleControls[6].addEventListener('click', ()=>{
    
    if(usingAlt === false){
        if(wizard.manaPotions >= 1){
            wizard.manaPotions -= 1;
            wizard.generateMana();
            displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        }
    } else {
        wizard.manaPotions -= 1;    
       currentFamiliar.generateMana();
        displayPlayerClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
    }
})



function displayFamiliarClassforBattle(player) {
    document.querySelector('.player-battle-stats').innerHTML = "";

  

    const html = `
        <div class="player-info-div tooltip">
            <h1>Player Statistics</h1>
            <div class="div-container-for-stats">
            <h1>Level: ${player.level}</h1>
            <h1>Health: ${player.health}</h1>
            <h1>Mana: ${player.mana}</h1>
            <h1>Defense: ${player.defense}</h1>
            <h1>Magic Power: ${player.magicPower}</h1>
            <h1>Attack Power: ${player.attackPower}</h1>
        
            </div>

        </div>
    `;

    document.querySelector('.player-battle-stats').insertAdjacentHTML('afterbegin', html);
}

buttonPlayerBattleControls[7].addEventListener('click', ()=>{
    if(usingAlt === false){
        usingAlt = true;
        displayFamiliarClassforBattle(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        imgForBattlePlayerAndFamiliar.src = currentFamiliar.newImgPath;
        displayFamiliarButtonSet(currentFamiliar, buttonPlayerBattleControls)
    } else if(usingAlt === true){
        usingAlt = false;
        imgForBattlePlayerAndFamiliar.src = wizard.imgForClass;
        displayPlayerClassforBattle(wizard, document.querySelector('.div-container-player-side-stats'));
        setBattleButtons()
    }

})

