function createMerchantDisplayItem(newItem, parent, array, playerInventoryArray, divPlayerInventory, itemSlots) {
    let buttonBuy = document.createElement('button');
    buttonBuy.classList.add('button-buy');
    buttonBuy.innerText = 'Buy';

    // Main container for the merchant item
    let divItem = document.createElement('div');
    divItem.classList.add('div-merchant-item');

    // Image element
    let imgItem = document.createElement('img');
    imgItem.classList.add('merchant-item-image');
    imgItem.src = newItem.imgPath;
    imgItem.alt = newItem.nameOf;

    // Stats container
    let divStats = document.createElement('div');
    divStats.classList.add('div-merchant-stats');

    let h1NameOf = document.createElement('h1');
    let h1Type = document.createElement('h1');
    let h1Price = document.createElement('h1');
    let h1Defense = document.createElement('h1');
    let h1Effect = document.createElement('h1');

    h1NameOf.innerText = `Name: ${newItem.nameOf}`;
    h1Type.innerText = `Type: ${newItem.type}`;
    h1Price.innerText = `Price: ${newItem.price}`;
    h1Defense.innerText = `Defense: ${newItem.defense}`;
    h1Effect.innerText = `Effect: ${newItem.effectDesc}`;
  
    // Append all stats to the stats div
    divStats.appendChild(h1NameOf);
    divStats.appendChild(h1Type);
    divStats.appendChild(h1Price);
    divStats.appendChild(h1Defense);
    divStats.appendChild(h1Effect);
    divStats.appendChild(buttonBuy);

    // Append image and stats to the main item container
    divItem.appendChild(imgItem);
    divItem.appendChild(divStats);

    // Append item to the parent container
    parent.appendChild(divItem);


    
    //buy button
    buttonBuy.addEventListener('click', ()=>{
        let checkItem = array[newItem.id]
        if(wizard.gold >= checkItem.price){
        let item = array.splice(newItem.id, 1);
        let nodeList = document.querySelectorAll('.div-merchant-item');
        giveIDtoList(arrayMerchantInventory);
        giveIDtoList(playerInventoryArray)
            divItem.remove();
            console.log(nodeList);
         wizard.gold -= parseFloat(item[0].price);
         playerInventoryArray.push(item[0]);
         createItemDisplay(divPlayerInventory, item[0], wizard, itemSlots);
         document.querySelector('#span-player-gold').innerText  = wizard.gold; 
        } else {alert('Insufficent gold')}
    });
}



