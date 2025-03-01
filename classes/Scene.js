class Scene {
    constructor(title, imgPath, description){
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
    }
    setScene(title_element, image_element, p_element){
        title_element.innerText = this.title;
        image_element.style.backgroundImage = `url(${this.imgPath})`
        p_element.innerText = this.description;
    }
}

//Code for scenes-----------------
const divSceneContainer = document.querySelector('.div-scene-container');
const h1SceneDesc = document.querySelector('.h1-scene');
const divSceneImage = document.querySelector('.div-inside-image');
const pSceneDesc = document.querySelector('.p-story-info');
const firstScene = new Scene('It was a beautiful night in Toyko.', './images/scenes/introScene1.jpg', 'The streets were filled with people enjoying the beautiful night.');
const secondScene = new Scene('Why is it so cold?.', './images/scenes/introScene2.jpg', 'The sky opened up and it became unbearingly cold.')
const thirdScene = new Scene("A demon in the sky.", './images/scenes/introScene3.jpg', "I almost forgot how cold it was when the demon appeared in the sky. There was an ominous wave that chilled me to the bone. I began to lose consciousness as breathing felt impossible.")
const fourthScene = new Scene('Engulfed in a vortex', './images/scenes/introScene4.jpg', "Colors spiraled around me and my mind drifted away from my body. It feels as if I am going somewhere in the form of light.")
const fifthScene = new Scene('The Castle', './images/scenes/introScene5.jpg', "I woke up and the first thing that I saw was a castle. There were no castles back home. I was in a strange place but I felt different.")
const sixthScene = new Scene('A chance of hope', './images/scenes/llama_horn.jpg', 'Luckily the Llama horn was secured and blown in time to send three-fourths of the dragons back to their realm. The chance of victory was now about even. This meant it was time to gear up and destroy the wizard before he has enough time to create another army of foul beasts.')
const seventhScene = new Scene('The four guardians', './images/scenes/llamaBoss4.jpg', 'The next great war for peace is marching forward unyeilding to fatigue. We must take arms and sway the winds of war in our favor. The battle begins.')
const EightScene = new Scene('The dark lord', './images/scenes/darkWizardKing.jpg', 'The dark death king has appeared atop a mountain. His fire illuminates the night sky.');
scenesArray = [firstScene, secondScene, thirdScene, fourthScene, fifthScene, sixthScene, seventhScene, EightScene];
divSceneImage.style.backgroundImage = `url(${firstScene.imgPath})`;
const buttonForwardScene = document.querySelector('.button-further-story')

let sceneIndex = 0;
let currentScene = null;

firstScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc);

buttonForwardScene.addEventListener('click', () => {
    if (sceneIndex === 0) {
        secondScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        sceneIndex += 1
    } else {
        if (sceneIndex >= scenesArray.length - 1) {
            return;
        } else {
            sceneIndex += 1
            currentScene = scenesArray[sceneIndex];
            currentScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        }
    }
    if (sceneIndex >= scenesArray.length - 1) {
        divSceneContainer.remove();
        document.querySelector('.div-choose-class').classList.add('add-margin')
        document.querySelectorAll('.div-player-choice').forEach((choice) => {
            choice.classList.remove('hide')
        })
        document.querySelector('.div-choose-class').classList.remove('hide');
        console.log('second condition')
    }
})