function initiateBattle() {
    document.querySelector('.battle-overlay').classList.remove('hide');
    displayPlayerClassforBattle(wizard, document.querySelector('.player-battle-stats'))
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
    document.querySelector('.div-container-enemy-side-img').style.backgroundImage = `url('./images/enemies/enemy${Math.floor(Math.random() * 16)}.jpg')`
    document.querySelector('.div-player-background-img').src = `${wizard.imgForClass}`;
    console.log(wizard.imageForClass)
    console.log(document.querySelector('.div-container-enemy-side-img'))
  
        displayPlayerClassforBattle(wizard, document.querySelector('.div-container-player-side-stats'));
}