    let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

    let stageEl = document.getElementById("stage");
    let fightButton = document.getElementById("fightButton");
    
    fightButton.addEventListener("click", function() {
        let fighter1 = fighters[Math.floor(Math.random() * fighters.length)];
        console.log(fighter1);
        let fighter2 = fighters[Math.floor(Math.random() * fighters.length)];
        console.log(fighter2);
    
        stageEl.innerHTML = fighter1 + " vs " + fighter2;
    });