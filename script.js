const resultValueElement = document.getElementById("result-value");

// Get all input elements
const baseDamageElement = document.getElementById("baseDamage");
const attackRateElement = document.getElementById("attackRate");
const criticalChanceElement = document.getElementById("criticalChance");
const criticalMultiplierElement = document.getElementById("criticalMultiplier");
const difficultyLevelElement = document.getElementById("difficultyLevel");

function calculateDPS(event) {
    event.preventDefault();

    // Get the values from the input elements
    let baseDamage = parseFloat(baseDamageElement.value);
    let attackRate = parseFloat(attackRateElement.value);
    let criticalChance = parseFloat(criticalChanceElement.value);
    let criticalMultiplier = parseFloat(criticalMultiplierElement.value);
    let difficultyLevel = parseFloat(difficultyLevelElement.value);

    if (isNaN(baseDamage)) {
        baseDamage = 0;
    }

    if (isNaN(attackRate)) {
        attackRate = 0;
    }

    if (isNaN(criticalChance)) {
        criticalChance = 0;
    }
    
    if (isNaN(criticalMultiplier)) {
        criticalMultiplier = 1;
    }

    if (isNaN(difficultyLevel)) {
        difficultyLevel = 1;
    }

    let damagePerSecond = (((baseDamage * (1 - criticalChance)) + (baseDamage * criticalMultiplier * criticalChance)) * attackRate * difficultyLevel);

    resultValueElement.innerText = damagePerSecond.toFixed(2);
}
