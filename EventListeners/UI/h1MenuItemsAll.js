const divResourceContainer = document.querySelector('.div-resource-container');
const menuContainer = document.querySelector('.div-menu')
const h1MenuItemsAll = document.querySelectorAll(".h1-menu-item");
// Left off fixing the display

let allContainers = [document.querySelector('.container-for-profile-img-stats'),
 document.querySelector('.div-merchant'),
  document.querySelector('.div-player-equip-area'),
   document.querySelector('.div-inventory-container-container'),
document.querySelector('.div-familiar-container'),
  document.querySelector('.div-map-container'),

]



h1MenuItemsAll[0].addEventListener('click', () => {
    findElementContainerByIndex(0, allContainers)
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))

})

h1MenuItemsAll[1].addEventListener('click', () => {
    findElementContainerByIndex(1, allContainers)
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))

})

const divInventorySlotAll = document.querySelectorAll('.div-equip-slot')

h1MenuItemsAll[2].addEventListener('click', () => {
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))
    findElementContainerByIndex(2, allContainers)
        document.querySelectorAll('.div-equip-slot').forEach((div) => {
            div.classList.remove('hide');
        })

});


h1MenuItemsAll[3].addEventListener('click', () => {
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))
    findElementContainerByIndex(3, allContainers)
    divInventorySlotAll.forEach((item) => {
        item.classList.remove('hide')
    })
    document.querySelectorAll('.div-equip-slot').forEach((div) => {
        div.classList.add('hide');
    })
})




h1MenuItemsAll[4].addEventListener('click', () => {

    findElementContainerByIndex(4, allContainers)
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))

})



h1MenuItemsAll[5].addEventListener('click', () => {
    findElementContainerByIndex(5, allContainers)
    hideMenuEquipSlots(document.querySelectorAll('.div-equip-slot'))

})







