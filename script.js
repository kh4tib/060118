const main = document.querySelector(".main");
// function appendNewElement(){
   
//     for(i=0 ; i<25 ; i++) {
//         const newElement = document.createElement("i");
//         main.appendChild(newElement);
//         console.log(i);
//     }
// }

// appendNewElement();

// setInterval(appendNewElement, 2000);

var interval = setInterval(function() { 
        var child = document.createElement('I'); 
        document.querySelector('.main').appendChild(child); 
    } , 1000);


function clearFoo() {
    clearInterval(interval);
}


setTimeout(clearFoo, 16000);