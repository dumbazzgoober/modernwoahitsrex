/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/

//MINE CREATION

function createMine() {
    for (let r = curY - 101; r < curY + 101; r++) {
        if (r > -1)
            mine[r] = [];
    }
    mine[curY][1000000000] = "⛏️"; //trusty pickaxe
    currentLayerNum = -1;
    setLayer(curY);
    checkAllAround(curX, curY, 1);
    displayArea();
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0) {
        if (mine[y] != undefined) {
            if (mine[y][x - 1] === undefined) {
                generated = generateBlock(luck, [y, x-1]);
                mine[y][x - 1] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(y, x-1);
            }
            
        }
    }
    if (mine[y] != undefined) {
        if (mine[y][x + 1] === undefined) {
            generated = generateBlock(luck, [y, x+1]);
            mine[y][x + 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x+1);
        }
        }
    if (mine[y + 1] === undefined) 
        mine[y + 1] = [];
        if (mine[y + 1][x] === undefined) {
            generated = generateBlock(luck, [y+1, x]);
            mine[y + 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y+1, x);
        }
        
    if (y - 1 >= 0) {
        if (mine[y - 1] === undefined) 
            mine[y - 1] = [];
            if (mine[y - 1][x] === undefined) {
                generated = generateBlock(luck, [y-1, x]);
                mine[y - 1][x] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(y-1, x);
            }
        
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        canMine = false;
        gearAbility3();
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        setTimeout(() => {
            if (ability1Active) {
                clearTimeout(ability1Timeout);
                ability1Active = false;
            }
            mineReset();
        }, 250);
    }
}

function createMineIndexes() {
    if (mine[curY + 100] === undefined)
        mine[curY + 100] = [];
    if (curY >= 50) {
        if (mine[curY - 100] === undefined) 
            mine[curY - 100] = [];
    } else {
        let constraints = getParams(0, 100);
        if (mine[constraints[1]] === undefined)
            mine[constraints[1]] = [];
    }
}
//MINING

function mineBlock(x, y, cause, luck) {
    let ore = mine[y][x];
    if (ore === "🟩") ore = "🟫";
    if (ore === "⚪") return;
    if (oreList[ore]["isBreakable"]) {
        if (checkFromCave([y, x])) {
            let adjMulti = getCaveMultiFromOre(mine[y][x]);
            giveBlock(mine[y][x], x, y, false, true, adjMulti);
            mine[y][x] = "⚪";
            checkAllAround(x, y, 1);
            totalMined++;
        } else {
        
        if (cause === "reset") {
            giveBlock(mine[y][x], x, y, true);
            mine[y][x] = "⚪";
        } else {
            giveBlock(mine[y][x], x, y);
            mine[y][x] = "⚪";
            checkAllAround(x, y, luck);
            totalMined++;
            if (cause !== "ability") {
                rollAbilities();
            }
        }
        }
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset, fromCave) {
    if (type !== "⛏️") {
        if (type === "⚪") return;
        //CREATE VARIABLES
        let oreRarity = Math.round(oreList[type]["numRarity"]);
        let pickaxeLevel1 = currentWorld === 1 ? 9 : 100
        let pickaxeLevel2 = currentWorld === 1 ? 6 : 100
        let minRarity = (currentPickaxe > pickaxeLevel1 ? 15000000 : (currentPickaxe > pickaxeLevel2 ? 2000000 : 750000));
        inv = 1;
        //SELECT VARIANT
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (!fromCave) {
            if (currentWorld === 1 && gears[4]) {
                let block = Object.keys(currentLayer);
                block = block[block.length - 1];
                oreList[block][variantInvNames[inv - 1]]++;
                updateInventory(block, 1);
            }
            if (gears[15]) {
                 if (oreRarity === 1 && (Math.random() < 0.5))
                    oreList[type]["normalAmt"] += 2;
            }
            if (gears[13]) {
                if (oreRarity < 750000 && oreRarity > 1)
                    if (Math.random < 0.75)
                        oreList[type]["normalAmt"]++;
            }
            if (oreList[type]["hasLog"])
                verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
            if (oreRarity > minRarity) {
                if (currentWorld === 1 && gears[7])
                    gearAbility1();
            logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);     
        }
        } else {
                if (oreList[type]["hasLog"]) {
                    verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
                }
                if (oreRarity > minRarity) {
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
                }
                if (currentWorld === 1 && gears[7] && oreRarity >= 750000)
                    gearAbility1();
        }
        oreList[type][variantInvNames[inv - 1]]++;
        updateInventory(type, inv);
    }
}

function generateBlock(luck, location) {
    luck += (gears[18] ? 0.75 : 0) + (gears[12] ? 0.35 : 0) + (gears[10] ? 0.25 : 0);
    luck *= gears[20] ? ((verifiedOres.getLuckBoosts()[currentPickaxe] * 0.05) + 1) : 1;
    if (currentWorld === 1)
        luck *= (gears[1] ? 1.1 : 1) * (gears[5] ? 1.6 : 1);
    blocksRevealedThisReset++;
    let probabilityTable = currentLayer;
    if (location[0] === 1 && currentWorld === 1)
        probabilityTable = specialLayers[2];
    if (currentWorld === 2) {
        if (Math.random < 1/444400000000000)
            return ["🍀", true]
        if (location[0] === 10000 && currentWorld === 2)
            probabilityTable = specialLayers[3];
    }
    let blockToGive = "";
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= luck;
    if ((location[0] === 0 && currentWorld === 1) || (location[0] === 2000 && currentWorld === 2))
        return ["🟩", false];
    
    for (let propertyName in probabilityTable) {
        summedProbability += oreList[propertyName]["decimalRarity"];
        //summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
            blockToGive = propertyName;
            break;
        }
    }
    let hasLog;
    if (oreList[blockToGive]["numRarity"] >= 750000) {
        hasLog = oreList[blockToGive]["hasLog"];
        if (hasLog) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
        }
        spawnMessage(blockToGive, location);
        playSound(oreList[blockToGive]["oreTier"]);
    }
    return [blockToGive, hasLog];
}

function stopMining() {
    curDirection = "";
    clearInterval(loopTimer);
    if (ability1Active) {
        clearTimeout(ability1Timeout);
        ability1Active = false;
    }
}
//TELEPORTING

let distanceMulti = 1;
let y = 1000;
function switchDistance() {
        if (y < (allLayers.length - 1) * 2000) {
            y = 2000 * distanceMulti + 1000;
            distanceMulti++;
        } else if (y > (allLayers.length - 1) * 2000) {
            if (currentWorld === 1) {
                y = 1000;
                distanceMulti = 1;
            } else {
                y = 3000;
                distanceMulti = 2;
            }
           
        } else {
            y = 1000;
            distanceMulti = 1;
        }
        let layer = Object.keys(allLayers[Math.floor(y / 2000)]);
        layer = layer[layer.length - 1];   
        let sub = currentWorld === 2 ? 2000 : 0;
        document.getElementById("meterDisplay").innerHTML = layer + " " + (y - sub).toLocaleString() + "m";
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    curDirection = "";
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    for (let r = y - 101; r < y + 101; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
    }
    setLayer(y - 50);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function getParams(distanceX, distanceY, x, y) {
    if (x === undefined)
        x = curX;
    if (y === undefined)
        y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX)
        displayLeft = distanceX;
    else
        displayLeft = x;
    if (currentWorld === 1) { 
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    } else {
        if (curY < 2001) {
            if (curY < 1991) {
                if (y > distanceY)
                    displayUp = distanceY;
                else
                    displayUp = y;
            } else {
                if (y > distanceY)
                    displayUp = -1 * (y - 2000);
                else
                    displayUp = y;
            }
            return [displayLeft, displayUp];
        }
        if (curY > 2000) {
            if (y < 2009 && y - 2000 > distanceY - 2000)
                displayUp = y - 2000;
            else
                displayUp = distanceY;
        } else {
            if (y > distanceY)
                displayUp = distanceY;
            else
                displayUp = y;
        }
    }
    return [displayLeft, displayUp];
}
function attemptSwitchWorld() {
    if (pickaxes[13][1]) {
        switchWorld();
    }
}
function switchWorld() {
    distanceMulti = 1;
    y = 1000;
    canMine = false;
    stopMining();
    mine = [];
    if (currentWorld === 1) {
        currentWorld = 2;
        allLayers = worldTwoLayers;
        curX = 1000000000;
        curY = 2001; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
        mine[curY + 1][curX] = "📺";
    } else {
        currentWorld = 1;
        allLayers = worldOneLayers;
        currentLayer = allLayers[0];
        curX = 1000000000;
        curY = 0; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
    }
    switchDistance();
    displayArea();
    switchWorldCraftables();
    canMine = true;
}


