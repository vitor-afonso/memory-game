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


    if (card.classList.contains("hidded")) {
        
        card.classList.remove("hidded");
        card.classList.add("makeVisible"); 
        

        if (cardCount === 0) {

            card1Src = card.src;
            card1 = card;
            cardCount++;
            return;
        }

        if (cardCount === 1) {

            card2Src = card.src;
            card2 = card;

            if (card1Src === card2Src) {

                document.querySelector("#scoreNum").innerHTML++;

        
                if (document.querySelector("#scoreNum").innerHTML == 3) {

                    let message = document.querySelector("#winningResult");
                    let totalScore =  document.querySelector("#scoreNum").innerHTML;
                    let totalFailedAttempts = document.querySelector("#attemptNum").innerHTML;
                    let totalResult = parseInt(totalScore) + parseInt(totalFailedAttempts);
                    
                    message.innerHTML = `Congratulations!! You won the game in ${totalResult} attempts.`;
                }
                
            } else {

                setTimeout(makeHidden, 2000, card1, card2);
                document.querySelector("#attemptNum").innerHTML++;
                
            }
            cardCount = 0;
        }
    }
    
}


function makeHidden(card1, card2) {

    card1.classList.remove("makeVisible");
    card1.classList.add("hidded");

    card2.classList.remove("makeVisible");
    card2.classList.add("hidded");

}

// disable clicking 2x in the same image