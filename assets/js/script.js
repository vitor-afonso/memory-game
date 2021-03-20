let num = 0;
let picClass; 
let picClass2;
let picArea1;
let picArea2;
let pic1;
let pic2;
let attempts = document.querySelector("#attemptNum");
let score = document.querySelector("#scoreNum");
let res = document.querySelector("#res"); 
let lock = 0; /* contador para bloquear cliques*/

function show(x) {

    if (lock == 1 || num == 1 && x.getAttribute("id") == picArea1.getAttribute("id")) {  /*Sempre que se clicar enquanto as 2 imagens estiverem visiveis ou for a mesma imagem, esse clique é cancelado.*/

        return;
    }

    let picArea = x;
    let pic = x.querySelector("img");
    
    num++;

    if (num === 1) {

        picArea1 = x;
        pic1 = x.querySelector("img");
        picArea1.style.backgroundColor = "#FFF";
        pic1.style.visibility = "visible";
        picClass = pic.getAttribute("class"); 
        
        

        console.log(picClass);
        
    } else if (num === 2) {
        
        lock = 1;
        pic2 = x.querySelector("img");
        picArea2 = x;
        picArea.style.backgroundColor = "#FFF";
        pic.style.visibility = "visible";
        picClass2 = pic.getAttribute("class"); 

        console.log(picClass2);
    }
    
    setTimeout(function() {
        
        if (num === 2 && picClass !== picClass2) {
            
            picArea1.style.background = "#00F";
            pic1.style.visibility = "hidden";
            
            picArea2.style.background = "#00F";
            pic2.style.visibility = "hidden"; 

            num = 0;  
            attempts.innerHTML++;
            
        } else if (num === 2 && picClass === picClass2) {

            score.innerHTML++;

            picArea1.style.borderBottom = "3px solid #0F0";
            picArea2.style.borderBottom = "3px solid #0F0";


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
        lock = 0;
    }, 2000);
    
    
    
    
}
