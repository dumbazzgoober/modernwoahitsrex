/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
const pixelcoordinate = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };
  const azeiclopiff = function(x, y){
      const index = pixelcoordinate(x, y,this.canvas.width);
      const data = this.getImageData(0,0,this.canvas.width,this.canvas.height).data;
      return data[index[0]];
  }
  CanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
  OffscreenCanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
let mine = [];
let curX = 1000000000;
let curY = 0;
let currentDisplay = "";
let blocksRevealedThisReset = 0;
let mineCapacity = 250000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let currentWorld = 1;
let currentLayerNum = 0;
const birthdays = {
    "3/28" : "Draedon",
    "5/21" : "Jade",
    "12/16" : "ThatBotCook",
    "12/23" : "Amber"
}
//IMPORTANT
const date = new Date();
let limitedTimer;
let inventoryTimer;
let minedElement;
let revealedElement;
let locationElement;
let blockElement;
let emojiNames;
function init() {
    minedElement = document.getElementById("blocksMined");
    revealedElement = document.getElementById("mineResetProgress");
    locationElement = document.getElementById("location");
    blockElement = document.getElementById("blockDisplay");
    let canContinue = true;
    createSpecialLayers();
    createInventory();
    createMine();
    createGearRecipes();
    createPickaxeRecipes();
    switchPowerupDisplay(0)
        document.getElementById('dataText').value = "";
        if (Math.random() < 1/1000)
            document.getElementById("cat").innerText = "CatAxe";
        limitedTimer = setInterval(checkLimitedOres, 1000);
        inventoryTimer = setInterval(updateInventory, 500);
        if (date.getMonth() === 3 && date.getDate() === 1) {
            document.title = "The Sily Caverns";
        }
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        for (let propertyName in birthdays) {
            if ((date.getMonth() + 1 === Number(propertyName.substring(0, propertyName.indexOf("/")))) && (date.getDate() === Number(propertyName.substring(propertyName.indexOf("/") + 1)))) {
                document.getElementById("spawnMessage").innerText = "Happy Birthday " + birthdays[propertyName] + "!!!";
            }
        }
    let playedBefore;
    if (!debug) playedBefore = localStorage.getItem("playedBefore");
    else playedBefore = localStorage.getItem("testingPlayedBefore");
    if (playedBefore) {
        canContinue = loadAllData();
    }
    else {
        canContinue = true;
        saveAllData();
    }
        fetch("emoji.json")
        .then((response) => response.json())
        .then((json) => setEmojiNames(json))
        .catch(error => {
            failedFetch();
        });
    if (canContinue) {
        repeatDataSave();
        if (!debug) localStorage.setItem("playedBefore", true);
        else localStorage.setItem("testingPlayedBefore", true);
        cat = verifiedOres.getCurrentLuck();
        utilitySwitchActions();
        switchPowerupDisplay(0)
        console.log("meow");
    }
}
function failedFetch() {
    for (let ore in oreList) oreList[ore]["oreName"] = "FAILED TO FETCH NAMES";
    switchLayerIndex(0, "dirtLayer", 1);
    for (let ore in oreList) {
        oreList[ore]["Normal"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Electrified"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Radioactive"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
        oreList[ore]["Explosive"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
}
function setEmojiNames(emojis) {
    for (let i = 0; i < emojis.length; i++) {
        if (oreList[emojis[i]["character"]] != undefined) {
            oreList[emojis[i]["character"]]["oreName"] = emojis[i]["unicodeName"].substring(emojis[i]["unicodeName"].indexOf(" ") + 1);
            oreList[emojis[i]["character"]]["Normal"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Electrified"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Radioactive"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
            oreList[emojis[i]["character"]]["Explosive"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
        }
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
    document.getElementById("meterDisplay").setAttribute("title", oreList["🟫"]["oreName"]);
    switchLayerIndex(0, "dirtLayer", 1);
}

let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let ethereal;
let celestial;
let imaginary;
let keepRunningAudio;
let eventSpawn;
let allAudios = {
    "Antique" : undefined,
    "Mystical" : undefined,
    "Divine" : undefined,
    "Flawless" : undefined,
    "Interstellar" : undefined,
    "Metaversal" : undefined,
    "Sacred" : undefined,
    "Ethereal" : undefined,
    "Celestial" : undefined,
    "Imaginary" : undefined
};
function loadContent() {
    keepRunningAudio = new Audio("audios/ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    keepRunning();
    eventSpawn = new Audio("audios/Glitch.mp3");
    eventSpawn.volume = 0.1;
    chill = new Audio("audios/spinechill.mp3");
    ringing = new Audio("audios/Transcendent.mp3");
    visionblur = new Audio("audios/visionblur.mp3");
    unfath = new Audio("audios/Unfathsound.mp3");
    ow = new Audio("audios/Otherworldly.mp3");
    zenith = new Audio("audios/Zenithsound.mp3");
    magnificent = new Audio("audios/magnificent.mp3");
    ethereal = new Audio("audios/ethereal sound by elysia.mp3");
    celestial = new Audio("audios/celestial.mp3");
    imaginary = new Audio("audios/ethereal sound by elysia.mp3");
    allAudios["Antique"] = chill;
    allAudios["Mystical"] = ringing;
    allAudios["Divine"] = visionblur;
    allAudios["Flawless"] = unfath;
    allAudios["Interstellar"] = ow;
    allAudios["Metaversal"] = magnificent;
    allAudios["Sacred"] = zenith;
    allAudios["Ethereal"] = ethereal;
    allAudios["Celestial"] = celestial;
    allAudios["Imaginary"] = imaginary;
    for (let property in allAudios) allAudios[property].load();
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
    init();
}

//MOVEMENT

function movePlayer(dir, reps) {
    for (let i = 0; i < reps; i++) {
        if (canMine) {
            if (currentWorld === 1 || player.stats.currentPickaxe > 12) {
                if (dir.y < 0 && !(curY > 0)) {
                    return;
                } else if (dir.x < 0 && !(curX > 0)) {
                    return;
                }
                if (oreList[mine[curY + dir.y][curX + dir.x]]["isBreakable"]) { 
                    mine[curY][curX] = "⚪";
                    curY += dir.y;
                    curX += dir.x;
                    if (dir.y !== 0) setLayer(curY);
                    mineBlock(curX, curY, "mining");
                    mine[curY][curX] = "⛏️";
                    lastDirection = dir.key;
                } else {
                    if (mine[curY + dir.y][curX + dir.x] === "✖️") {
                        if (Math.random() < 1/10000000) {
                            mine[curY][curX] = "⚪";
                            curY += dir.y;
                            curX += dir.x;
                            if (dir.y !== 0) setLayer(curY)
                            mine[curY][curX] = "⛏️";
                            lastDirection = dir.key;
                            spawnMessage("⛏️", {"X" : curX, "Y" : curY})
                            giveBlock("⛏️", curX, curY, false);
                            checkAllAround(curX, curY);
                        }
                    }
                }
            }
        }
        displayArea();
        }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
    switch(name) {
        case "w":
            validInput = true;
            break;
        case "a":
            validInput = true;
            break;
        case "s":
            validInput = true;
            break;
        case "d":
            validInput = true;
            break;
        case "arrowup":
            event.preventDefault();
            goDirection('w')
            return;
        case "arrowleft":
            event.preventDefault();
            goDirection('a')
            return;
        case "arrowdown":
            event.preventDefault();
            goDirection('s')
            return;
        case "arrowright":
            event.preventDefault();
            goDirection('d')
            return;
        case "escape":
            //toggleCelestials(false)
            if (document.getElementById("settingsContainer").style.display === "block") 
                hideSettings();
            else
                showSettings();
            break;
        default:
            break;
    }
    if (validInput) {
        clearInterval(loopTimer);
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        curDirection = "";
        let movements = {x:0, y:0, key:name};
        movements.x = (name === "a" ? -1 : (name === "d" ? 1 : 0));
        movements.y = (name === "s" ? 1 : (name === "w" ? -1 : 0));
        movePlayer(movements, 1);
        energySiphonerDirection = "";
    }
}, false);

let loopTimer = null;
let curDirection = "";
let baseSpeed = 25;;
function goDirection(direction, speed) {
    if (curDirection === direction) {
        clearInterval(loopTimer);
        insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
        curDirection = "";
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    } else {
        let reps = 1;
        let miningSpeed;
        clearInterval(loopTimer);
        removeFromLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"]});
        
        if (speed === undefined) {
        if (currentWorld === 1 && player.gears["gear2"])
            miningSpeed = baseSpeed - 10;
        if (currentWorld === 1 && player.gears["gear6"])
            miningSpeed = baseSpeed - 15;
        if (currentWorld === 2 || (player.gears["gear11"] && player.gears["gear13"] && player.gears["gear19"]))
            miningSpeed = baseSpeed - (player.gears["gear11"] ? 3 : 0) - (player.gears["gear13"] ? 5 : 0) - (player.gears["gear19"] ? 13 : 0);
        } else {
            miningSpeed = speed;
        }
        if (miningSpeed < player.settings.minSpeed)
            miningSpeed = player.settings.minSpeed;
        if (player.stats.currentPickaxe === 12)
            reps++;
        reps += player.gears["gear19"] ? 2 : 0;
        if (a13) {
            reps = 1;
            miningSpeed = 35;
        }
        let movements = {x:0, y:0, key:direction};
        movements.x = (direction === "a" ? -1 : (direction === "d" ? 1 : 0));
        movements.y = (direction === "s" ? 1 : (direction === "w" ? -1 : 0));
        miningSpeed ??= 25;
        loopTimer = setInterval(movePlayer, miningSpeed, movements, reps);
        curDirection = direction;
        energySiphonerDirection = direction;
    }
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    let movements = {x:0, y:0, key:dir};
    movements.x = (dir === "a" ? -1 : (dir === "d" ? 1 : 0));
    movements.y = (dir === "s" ? 1 : (dir === "w" ? -1 : 0));
    movePlayer(movements, 1);
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
    }, 50);
    energySiphonerDirection = "";
}

function updateStats() {
    let pickaxeLevel1 = currentWorld === 1 ? 9 : 23;
    let pickaxeLevel2 = currentWorld === 1 ? 6 : 20;
    minRarity = (player.stats.currentPickaxe > pickaxeLevel1 ? 20000000 : (player.stats.currentPickaxe > pickaxeLevel2 ? 2000000 : 750000));
}

//DISPLAY
const invisibleBlock = "<span class='invisible'>⚪</span>";
function displayArea() {
    if (player.settings.canDisplay) {
        let output ="";
        let constraints = getParams(9, 9);
        let grass = 0;
        if (currentWorld === 2)
            grass = 2000;
        for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
            mine[r] ??= [];
            for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++) {
                if (mine[r][c]) {
                    if (player.settings.usePathBlocks)
                        output += mine[r][c];
                    else
                        output += mine[r][c] === "⚪" ? invisibleBlock : mine[r][c];   
                } else {
                    output += r === grass ? "🟩" : "⬛";
                }
            }  
            output += "<br>";
        }
        blockElement.innerHTML = (output.substring(0, output.length - 4));
    }
    revealedElement.innerText = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
    minedElement.innerText = player.stats.blocksMined.toLocaleString() + " Blocks Mined";
    let sub = currentWorld === 2 ? 2000 : 0;
    locationElement.innerText = "X: " + (curX - 1000000000).toLocaleString() + " | Y: " + (-(curY - sub)).toLocaleString();
    if (player.oreTracker.tracking) {
        getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
    }
}

//HTML EDITING

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"]
function switchInventory(amt) {
    document.getElementById(("inventory") + variant).style.display = "none";
    variant += amt;
    if (variant > 4) variant = 1;
    else if (variant < 1) variant = 4
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    showing = false;
}

function createInventory() {
    let arr = [];
    for (let propertyName in oreInformation.oreTiers) {
        arr.push(oreInformation.getOresByTier(propertyName));
    }
    for (let k = arr.length - 1; k >= 0; k--) {
        for (let i = 0; i < arr[k].length; i++) {
            for (let j = 0; j < arr[k].length - i - 1; j++) {
                let rarity1 = oreList[arr[k][j]]["numRarity"];
                let rarity2 = oreList[arr[k][j + 1]]["numRarity"];
                    if (oreList[arr[k][j]]["caveExclusive"])
                rarity1 *= getCaveMultiFromOre(arr[k][j]);
                if (oreList[arr[k][j + 1]]["caveExclusive"])
                    rarity2 *= getCaveMultiFromOre(arr[k][j + 1]);
                if (rarity1 < rarity2) {
                    const lesser = arr[k][j + 1];
                    arr[k][j + 1] = arr[k][j];
                    arr[k][j] = lesser;
                }
            }
        }
        
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        for (let k = 0; k < arr[j].length; k++) {
            let propertyName = arr[j][k];
            for (let i = 1; i < 5; i++) {
                let oreNum = oreList[propertyName][variantInvNames[i - 1]];
                let tempElement = document.createElement('tr');
                tempElement.classList = "oreDisplay";
                tempElement.setAttribute("onclick", "randomFunction(\"" + propertyName + "\", 'inv')");
                let colors = oreInformation.getColors(oreList[propertyName]["oreTier"]);
                tempElement.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 90%, black)"
                tempElement.style.color = colors["textColor"];
                tempElement.style.display = "none";
                let oreNameBlock = document.createElement("td");
                oreNameBlock.innerText = propertyName;
                oreNameBlock.classList = "inventoryElement1";
                let oreRarityBlock = document.createElement("td");
                let rarity = oreList[propertyName]["numRarity"];
                if (oreList[propertyName]["caveExclusive"]) {
                    rarity *= getCaveMultiFromOre(propertyName);
                    oreRarityBlock.innerText = "1/" + (rarity * multis[i - 1]).toLocaleString() + "*";
                } else {
                    oreRarityBlock.innerText = "1/" + (rarity * multis[i - 1]).toLocaleString();
                }
                oreRarityBlock.classList = "inventoryElement2";
                let oreAmountBlock = document.createElement("td");
                oreAmountBlock.id = (propertyName + "amt" + i);
                oreAmountBlock.innerText = "x" + oreNum.toLocaleString();
                oreAmountBlock.classList = "inventoryElement3";
                oreList[propertyName][names[i - 1]] = oreAmountBlock;
                if (colors["textColor"] === "#ffffff") 
                {
                    oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
                    oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
                }
                else
                {
                    oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
                    oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
                } 
                tempElement.appendChild(oreNameBlock);
                tempElement.appendChild(oreRarityBlock);
                tempElement.appendChild(oreList[propertyName][names[i - 1]]);
                document.getElementById(("inventory") + i).appendChild(tempElement);
            }
        }
    }
        
     
}

let variant = 1;
let inventoryObj = {};
let lastTime = Date.now();
function updateInventory() {
    for (let propertyName in inventoryObj) {
        for (let i = 1; i < 5; i++) {
            oreList[propertyName][names[i - 1]].innerText = "x" + oreList[propertyName][variantInvNames[i - 1]].toLocaleString();
            if (oreList[propertyName][variantInvNames[i - 1]] > 0) (oreList[propertyName][names[i - 1]].parentElement).style.display = "table";
            else (oreList[propertyName][names[i - 1]].parentElement).style.display = "none";
        }
    }
    inventoryObj = {};
    updateActiveRecipe();
        if (player.powerupVariables.currentChosenOre.ore !== undefined && Date.now() >= player.powerupVariables.currentChosenOre.removeAt) {
            player.powerupVariables.currentChosenOre.ore = undefined;
            applyLuckToLayer(currentLayer, verifiedOres.getCurrentLuck());
        }
    if (player.powerupVariables.commonsAffected.state && Date.now() >= player.powerupVariables.commonsAffected.removeAt) {
        player.powerupVariables.commonsAffected.state = false;
        applyLuckToLayer(currentLayer, verifiedOres.getCurrentLuck());
    }
    if (player.powerupVariables.fakeEquipped.item !== "" && Date.now() >= player.powerupVariables.fakeEquipped.removeAt) {
        if (player.gears[player.powerupVariables.fakeEquipped.item] != undefined) {
            if (player.powerupVariables.fakeEquipped.item === "gear0") document.getElementById("trackerLock").style.display = "inline-flex";
            if (player.powerupVariables.fakeEquipped.item === "gear9") document.getElementById("sillyRecipe").style.display = "none";
            player.gears[player.powerupVariables.fakeEquipped.item] = false;
            player.powerupVariables.fakeEquipped.item = "";
        }
        if (player.pickaxes[player.powerupVariables.fakeEquipped.item] != undefined) {
            player.pickaxes[player.powerupVariables.fakeEquipped.item] = false;
            player.stats.currentPickaxe = player.powerupVariables.fakeEquipped.originalState;
            player.powerupVariables.fakeEquipped.item = "";
            player.powerupVariables.fakeEquipped.originalState = undefined;
        }
        let tempDirection = curDirection;
        stopMining();
        goDirection(tempDirection);
        applyLuckToLayer(currentLayer, verifiedOres.getCurrentLuck());
    }
    checkPowerupCooldowns();
    updatePowerupCooldowns();
    player.stats.timePlayed += Date.now() - lastTime;
    lastTime = Date.now();
}

function appear(element){
    element.classList.remove("hidden")
}
function disappear(element){
    element.classList.add("hidden")
}

//SPAWNS AND FINDS

let spawnOre = null;
function spawnMessage(block, location, caveInfo) {
    //ADD TO MINE CAPACITY IF NEAR RESET
    player.oreTracker.existingOres.push({block: block, posX : location["X"], posY : location["Y"]});
    if ((currentWorld === 1 && !player.gears["gear3"]) && (blocksRevealedThisReset > mineCapacity - 10000) && mineCapacity < player.settings.baseMineCapacity + 50000)
        mineCapacity += 10000;
    else if (!player.gears["gear17"] && (blocksRevealedThisReset > mineCapacity - 10000) && mineCapacity < player.settings.baseMineCapacity + 50000)
        mineCapacity += 10000;
    let oreRarity = oreList[block]["numRarity"];
    let spawnElement = document.getElementById("latestSpawns");
    let sub = currentWorld === 1 ? 0 : 2000;
    let output = "";
    let element = document.createElement("p");
    element.setAttribute("title", oreList[block]["oreName"]);
    element.classList = "latestFind";
    if (caveInfo != undefined) output += `<span title="${oreList[block]["oreName"]}">` + block + " 1/" + caveInfo["adjRarity"].toLocaleString() + " Adjusted.";
    else output += `<span title="${oreList[block]["oreName"]}">` + block + "</span> 1/" + oreRarity.toLocaleString();
    let colors = oreInformation.getColors(oreList[block]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    else element.style.textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > 10) spawnElement.removeChild(spawnElement.lastChild);
        let createSpawnMessage = false;
        if (spawnOre === null) 
            createSpawnMessage = true;
        else if (document.getElementById("spawnMessage").innerText.indexOf(" Has Spawned!") > -1) 
            createSpawnMessage = true;
        else if (oreList[block]["spawnMessage"].indexOf(" Has Spawned!") < 0)
            createSpawnMessage = true;
        if (createSpawnMessage || oreInformation.tierGrOrEqTo({"tier1":oreList[block]["oreTier"], "tier2":"Flawless"})) {
            let spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreList[block]["spawnMessage"] + "</span></i><br>";
            if (caveInfo != undefined) {
                document.getElementById("spawnMessage").innerHTML = spawnText + "1/" + (caveInfo["adjRarity"]).toLocaleString();
            } else {
                document.getElementById("spawnMessage").innerHTML = spawnText + "1/" + oreRarity.toLocaleString();
            }
            clearTimeout(spawnOre);
            spawnOre = setTimeout(() => {
            document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!";
            spawnOre = null;
        }, 30000);
        }
        
}

let loggedFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    //latestFinds.push([type, x, y, variant, atMined, fromReset]);
    removeExistingOre({x: x, y:y})
    let sub = currentWorld === 1 ? 0 : 2000;
    let spawnElement = document.getElementById("latestFinds");
    let element = document.createElement("p");
    element.classList = "latestFind";
    let colors = oreInformation.getColors(oreList[type]["oreTier"]);
    element.style.backgroundImage = "linear-gradient(to right, black," + colors["backgroundColor"] + " 20%, 80%, black)";
    element.style.color = colors["textColor"];
    if (colors["textColor"] === "#ffffff") element.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    else element.style.textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
    element.setAttribute("title", oreList[type]["oreName"]);
    output += `<span onclick='goToOre(\"${type}\", \"${variant}\")'>`;
    output += variant + " ";
    output += type + " | X: " + (x - 1000000000).toLocaleString() + ", Y: " + (-(y - sub)).toLocaleString();
    if (fromReset) output += " | FROM RESET<br>";
    else output += " | At " + atMined.toLocaleString() +  " Mined.<br>";
    output += "</span>";
    element.innerHTML = output;
    if (spawnElement.children.length > 0) {
        spawnElement.insertBefore(element, spawnElement.firstChild);
    } else {
        spawnElement.innerText = "";
        spawnElement.appendChild(element)
    }
    if (spawnElement.children.length > 10) spawnElement.removeChild(spawnElement.lastChild);
}

function getAngleBetweenPoints(obj) {
    let x = obj.x - curX;
    let y = obj.y - curY;
    let angle = Math.atan2(y, x);
    if(angle < 0) angle += Math.PI * 2;
    angle *= (180 / Math.PI);
    document.getElementById("trackerArrow").style.transform = `rotate(${angle}deg)`;
    return angle;
}
function checkExistingOres() {
    let closestIndex = -1;
    let closestLocation = Infinity;
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num = Math.abs(curX - player.oreTracker.existingOres[i].posX) + Math.abs(curY - player.oreTracker.existingOres[i].posY);
        mine[player.oreTracker.existingOres[i].posY] ??= [];
        if (num < closestLocation && (mine[player.oreTracker.existingOres[i].posY][player.oreTracker.existingOres[i].posX] === player.oreTracker.existingOres[i].block)) {
            closestIndex = i;
            closestLocation = num;
        }
    }
    if (closestIndex > -1) {
        mine[player.oreTracker.existingOres[closestIndex].posY] ??= [];
        if (mine[player.oreTracker.existingOres[closestIndex].posY][player.oreTracker.existingOres[closestIndex].posX] === player.oreTracker.existingOres[closestIndex].block) {
            player.oreTracker.tracking = true;
            player.oreTracker.locationX = player.oreTracker.existingOres[closestIndex].posX;
            player.oreTracker.locationY = player.oreTracker.existingOres[closestIndex].posY;
            document.getElementById("trackerOre").innerText = `Ore: ${player.oreTracker.existingOres[closestIndex].block}`
            document.getElementById("trackerX").innerText = `X: ${(player.oreTracker.locationX - 1000000000).toLocaleString()}`
            document.getElementById("trackerY").innerText = `Y: ${(-1 * (player.oreTracker.locationY - (currentWorld === 1 ? 0 : 2000))).toLocaleString()}`
            getAngleBetweenPoints({x:player.oreTracker.locationX, y:player.oreTracker.locationY});
        }
    }
}
function removeExistingOre(location) {
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num1 = player.oreTracker.existingOres[i].posX;
        let num2 = player.oreTracker.existingOres[i].posY;
        if (location.x === num1 && location.y === num2) {
            player.oreTracker.existingOres.splice(i, 1);
            if (location.x === player.oreTracker.locationX && location.y === player.oreTracker.locationY) {
                document.getElementById("trackerOre").innerText = `Ore: N/A`
                document.getElementById("trackerX").innerText = `X: N/A`
                document.getElementById("trackerY").innerText = `Y: N/A`
                removeTrackerInformation();
            }
            break;
        }
    }
}
function removeTrackerInformation() {
    player.oreTracker.tracking = false;
    player.oreTracker.locationX = 0;
    player.oreTracker.locationY = 0;
}

function goToOre(block, variantType) {
    //SET INVENTORY
    let variantNum = namesemojis.indexOf(variantType) + 1;
    document.getElementById("inventory" + variant).style.display = "none";
    variant = variantNum;
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    let inventoryElements = document.getElementById("inventory" + variantNum).children;
    let oreHeightValue
    if (inventoryElements[0].style.display === "table")
        oreHeightValue = inventoryElements[0].getBoundingClientRect()["height"];
    else {
        inventoryElements[0].style.display = "table";
        oreHeightValue = inventoryElements[0].getBoundingClientRect()["height"];
        inventoryElements[0].style.display = "none";
    }
    let multi = 0;
    for (let i = 0; i < inventoryElements.length; i++) {
        let ore = inventoryElements[i].innerText.substring(0, inventoryElements[i].innerText.indexOf("1") - 1);
        let element = inventoryElements[i];
        if (element.style.display === "table") {
            if (ore === block) {
                let total = oreHeightValue * multi;
                document.getElementById("inventoryDisplay").scrollTop = total;
                return;
            } else {
                multi++;
            }
        }
    }
}
/*
function toggleCelestials(state) {
    let element = document.getElementById("celestialContainer");
    if (!state) {
        document.getElementById("mainContent").style.display = "block";
        element.style.display = "none";
        canMine = true
    } 
    else {
        element.style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        canMine = false;
    }
}
*/
//TY @marbelynrye FOR MAKING THESE IMAGE DATA GATHERERS UR SO COOL FOR THAT
//IT WORKS SO WELL!!!!
let pickaxe24Nums = [];
const az = new Image()
az.src = "ability1.jpg"
        az.onload = () => {
            const c = new OffscreenCanvas(az.width,az.height)
            const cc = c.getContext("2d")
            cc.drawImage(az,0,0)
            const data = cc.getImageData(0,0,c.width,c.height).data
            for (let i = 0; i < data.length; i+=4) {
                data[i]>125?null:pickaxe24Nums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
            }
    }
let pickaxe25Nums = [];
const ay = new Image();
ay.src = "coronalheart.png"
ay.onload = () => {
    const c = new OffscreenCanvas(ay.width,ay.height)
    const cc = c.getContext("2d")
    cc.drawImage(ay,0,0)
    const data = cc.getImageData(0,0,c.width,c.height).data
    for (let i = 0; i < data.length; i+=4) {
        data[i]>125?null:pickaxe25Nums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
    }
}