function createPlayerFamiliarDiv(familiar, parentHTML, imgPath){
    let familiarDiv = document.createElement('div');
    familiarDiv.classList.add('div-familiar-container-1')
    let familiarDivTitle = document.createElement('h1');
    let familiarDivImg = document.createElement('div');
    familiar.newImgPath = imgPath;
    familiarDivImg.style.backgroundImage = `url(${imgPath})`;
    familiarDivImg.classList.add('div-familiar-image')
    
    let familiarDivSTR = document.createElement('p');
    let familiarDivDEF = document.createElement('p');
    let familiarDivHP = document.createElement('p');
    let familiarDivMANA = document.createElement('p');
    let familiarH1SkillHeader = document.createElement('h1');
    let familiarSpecialAbility1Des = document.createElement('p');
    let familiarSpecialAbility2Des = document.createElement('p');
    let familiarSpecialAbility3Des = document.createElement('p');
    let familiarSpecialAbility1 = document.createElement('p');
    let familiarSpecialAbility2 = document.createElement('p');
    let familiarSpecialAbility3 = document.createElement('p');
    let familiarPrice = document.createElement('p');
    
    familiarH1SkillHeader.classList.add('h1-familiar-skill-header')
    familiarH1SkillHeader.innerText = 'Skills'
    familiarDiv.appendChild(familiarDivTitle);
    familiarDivTitle.classList.add('h1-familiar-div-title')
    familiarDiv.appendChild(familiarDivImg);
    familiarDiv.appendChild(familiarDivSTR);
    familiarDiv.appendChild(familiarDivDEF);
    familiarDiv.appendChild(familiarDivHP);
    familiarDiv.appendChild(familiarDivMANA);
    familiarDiv.appendChild(familiarH1SkillHeader);
    familiarDiv.appendChild(familiarSpecialAbility1);
    familiarDiv.appendChild(familiarSpecialAbility1Des);
    familiarDiv.appendChild(familiarSpecialAbility2);
    familiarDiv.appendChild(familiarSpecialAbility2Des);
    familiarDiv.appendChild(familiarSpecialAbility3Des);
    familiarDiv.appendChild(familiarSpecialAbility3);
    familiarDiv.appendChild(familiarPrice);
    familiarDivTitle.innerText = familiar.name;
    
    
    // familiarDivImg.style.backgroundImage = `url(${familiar.imgPath})`;
    familiarDivSTR.innerText = `STR: ${familiar.strength}`;
    familiarDivDEF.innerText = `DEF: ${familiar.defense}`;
    familiarDivHP.innerText = `HP: ${familiar.health}`;
    familiarDivMANA.innerText = `MP: ${familiar.mana}`;
    // familiarS
    familiarSpecialAbility1.innerText = familiar.specialAbility1;
    familiarSpecialAbility2.innerText = familiar.specialAbility2;
    familiarSpecialAbility3.innerText = familiar.specialAbility3;
    familiarSpecialAbility1Des.innerText = familiar.specialAbility1Des;
    familiarSpecialAbility2Des.innerText = familiar.specialAbility2Des;
    familiarSpecialAbility3Des.innerText = familiar.specialAbility3Des;
    
    
        let buttonEquip = document.createElement('button');

        
        
        familiarDiv.appendChild(buttonEquip);
        buttonEquip.innerText = 'Equip';
        buttonEquip.addEventListener('click', ()=>{
            currentFamiliar = familiar;
        });
        
        parentHTML.appendChild(familiarDiv)
  
    
    };