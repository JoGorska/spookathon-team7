function getRandomBetweenRange(min, max) {
    if (max < min) {
        console.log("Incorrect values passed to getRandomBetweenRange. Max should be > min");
        return 0;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function owlAction() {
    let actionElement = document.getElementById("title-page-art-owl-action");
    // toggleVisibility(actionElement);
    actionElement.style.opacity = "1";
    window.setTimeout(function() {
        fadeOut(actionElement);
    }, 2000);
}

function toggleVisibility(element) {
    if(element.style.display != "block") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function fadeOut(element) {
    element.style.opacity = "0";
}

function addBats(numBats) {
    let batSpawner = document.getElementById("title-page-art-bat-spawner");
    for(let i = 0; i < numBats; i++) {
        let batTop = getRandomBetweenRange(20, 200);
        let batLeft = getRandomBetweenRange(-(window.innerWidth), -10);
        console.log(`Bat: ${i} Left: ${batLeft}`);
        let batHTML = `<img src="assets/images/title_bat.svg" alt="" class="art bat" id="title-page-art-bat" style="top: ${batTop}px; left: ${batLeft}px">`
        batSpawner.innerHTML += batHTML;
    }
}


function batFlutter() {
    let bats = document.getElementsByClassName("bat");
    for(let bat of bats){
        // Update bat vertical position so it looks like it's flapping around.
        let batTop = parseInt(bat.style.top, 10);
        batTop += getRandomBetweenRange(-5, 5);
        
        // Update bat left position so it moves across the screen
        let batLeft = parseInt(bat.style.left, 10);
        if(batLeft > window.innerWidth) {
            batLeft = getRandomBetweenRange(-(window.innerWidth), -10);
            batTop = getRandomBetweenRange(20, 200);
        } else {
            batLeft += getRandomBetweenRange(5, 10);
        }

        // Set new position on bat element
        bat.style.top = batTop + "px";
        bat.style.left = batLeft + "px";
    }
}

window.addEventListener('load',function(){
    document.getElementById("title-page-art-owl").addEventListener("click", owlAction, false);
    addBats(3);
    setInterval(batFlutter, 50);
});






