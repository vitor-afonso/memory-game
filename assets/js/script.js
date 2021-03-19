let num = 0;
let picID; 
let picID2;
let picArea1;
let picArea2;
let pic1;
let pic2;
let attempts = document.querySelector("#attemptNum");
let score = document.querySelector("#scoreNum");
let res = document.querySelector("#res"); 
let total;
let naoMexe = 0;

function show(x) {
    if (naoMexe == 1) {
        return;
    }
    let picArea = x;
    let pic = x.querySelector("img");
    

    num++;

    if (num === 1) {

        pic1 = x.querySelector("img");
        picArea1 = x;
        picArea.style.backgroundColor = "#FFF";
        pic.style.visibility = "visible";
        picID = pic.getAttribute("class"); 

        console.log(picID);

    } else if (num === 2) {
        naoMexe = 1;
        pic2 = x.querySelector("img");
        picArea2 = x;
        picArea.style.backgroundColor = "#FFF";
        pic.style.visibility = "visible";
        picID2 = pic.getAttribute("class"); 

        
        console.log(picID2);
    }
    
    setTimeout(function() {
        
        if (num === 2 && picID !== picID2) {
            
            picArea1.style.background = "#00F";
            pic1.style.visibility = "hidden";
            
            picArea2.style.background = "#00F";
            pic2.style.visibility = "hidden"; 

            num = 0;  
            attempts.innerHTML++;
            
        } else if (num === 2 && picID === picID2) {

            score.innerHTML++;

            if (pic1.style.visibility == "visible" || pic2.style.visibility == "visible") {

                picArea1.removeAttribute("onclick");
                picArea2.removeAttribute("onclick");
            
                num = 0;  
                
            }
            console.log(score.innerHTML);
            if (score.innerHTML == 3) {
                res.innerHTML = "Congratulations! You finished the game in " + (parseInt(score.innerHTML) + parseInt(attempts.innerHTML)) + " attempts.";
            }
        
        }
        naoMexe = 0;
    }, 2000);
    
    
    
    
}
