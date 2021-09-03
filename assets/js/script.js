/* jshint esversion: 6*/
window.onload = function() {
    
    let images = document.querySelectorAll("#group1 > div");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = show;
    }

};

function show(objEvent) {
    
    let cardArea = objEvent.target;
    let card = cardArea.querySelector("img");
    //let cardNumbers = 1;

    if (card.classList.contains("hidded")) {

        
        card.classList.remove("hidded");
        card.classList.add("makeVisible"); 
        cardNumbers++;
    }
    /*
    if (cardNumbers === 2) {

        setTimeout(makeHidden, 3000, card);

    }
    */
    
}
function makeHidden(card) {

    card.classList.remove("makeVisible");
    card.classList.add("hidded");

}
// Think about another function to compare the choices 