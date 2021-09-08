/* jshint esversion: 6*/

window.onload = function() {
    
    let images = document.querySelectorAll("#group1 > div");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = show;
    }

};

let card1;
let card2;
let card1Src;
let card2Src;
let cardCount = 0;

function show(objEvent) {
    
    let cardArea = objEvent.target;
    let card = cardArea.querySelector("img");

    if (cardCount > 0 && card === null) { 

        return;
    } 

    card.classList.remove("hidded");
    card.classList.add("makeVisible");

    if (cardCount === 0) {

        card1 = card;
        card1Src = card.src;
        cardCount++;
        setTimeout(hideCard1, 5000, card1);
        return;
    }

    if (cardCount === 1) {

        card2 = card;
        card2Src = card.src;
        

        if (card1Src === card2Src) {

            card1.classList.add("done");
            card2.classList.add("done");
            
            document.querySelector("#scoreNum").innerHTML++;

        
            if (document.querySelector("#scoreNum").innerHTML == 3) {

                let message = document.querySelector("#winningResult");
                let totalScore =  document.querySelector("#scoreNum").innerHTML;
                let totalFailedAttempts = document.querySelector("#attemptNum").innerHTML;
                let totalResult = parseInt(totalScore) + parseInt(totalFailedAttempts);
                let images = document.querySelectorAll("#group1 > div");
                    
                message.innerHTML = `Congratulations!! You won the game in ${totalResult} attempts.`;
                
                for (let i = 0; i < images.length; i++) {
                    images[i].onclick = " ";
                }
            }
                
        } else {
            
            // Removes the onclick show function
            let images = document.querySelectorAll("#group1 > div");
            for (let i = 0; i < images.length; i++) {
                images[i].onclick = " ";
            }
            
            
            setTimeout(makeHidden, 2000, card1, card2);
            document.querySelector("#attemptNum").innerHTML++;
            
        }
        cardCount = 0;
    }
    return;
}

//Turns the first card back if no other selection is made within 5 sec
function hideCard1(card1) {

    if (card1.classList.contains("makeVisible") && !card1.classList.contains("done")) {

        card1.classList.remove("makeVisible");
        card1.classList.add("hidded");
        card1Src = "";
        cardCount = 0;
    }
}


function makeHidden(card1, card2) {

    card1.classList.remove("makeVisible");
    card1.classList.add("hidded");

    card2.classList.remove("makeVisible");
    card2.classList.add("hidded");

    // Reactivates the onclick show function
    let images = document.querySelectorAll("#group1 > div");            
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = show;
    }

}

// make it random the images every time