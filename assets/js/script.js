let num = 0;
let picID; 
let picID2;

function show(x) {

    
    let allDiv = document.querySelector("#group1");
    let allPic = document.getElementsByTagName("img");
    let picArea = x;
    let pic = x.querySelector("img");
    let attempts = document.querySelector("#attemptNum");
    num++;

    if (num === 1) {

        picArea.style.backgroundColor = "#FFF";
        pic.style.visibility = "visible";
        picID = pic.getAttribute("class"); 
        console.log(picID);

    } else if (num === 2) {

        picArea.style.backgroundColor = "#FFF";
        pic.style.visibility = "visible";
        picID2 = pic.getAttribute("class"); 
        attempts.innerHTML = + 1;
        console.log(picID2);
    }

    if (num === 2 && picID != picID2) {
        
        allDiv.querySelectorAll(".g-area").style.backgroundColor = "#00F";
        allPic.style.cssText = "visibility: hidden;";
        num = 0;  

    }


}
