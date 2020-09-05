let output = document.getElementById("output");

function choose() {
    let anna1 = document.getElementById("anna1");
    let anna2 = document.getElementById("anna2");
    let anna3 = document.getElementById("anna3");

    let nikita1 = document.getElementById("nikita1");
    let nikita2 = document.getElementById("nikita2");
    let nikita3 = document.getElementById("nikita3");

    let danil1 = document.getElementById("danil1");
    let danil2 = document.getElementById("danil2");
    let danil3 = document.getElementById("danil3");

    let oleg1 = document.getElementById("oleg1");
    let oleg2 = document.getElementById("oleg2");
    let oleg3 = document.getElementById("oleg3");

    if (anna1.checked && nikita1.checked 
        && danil2.checked 
        && oleg3.checked) {
            console.log("test");
    } else if (anna1.checked && nikita1.checked 
        && oleg2.checked 
        && danil3.checked) {
            console.log("test");
    } else if (anna1.checked && danil1.checked 
        && nikita2.checked 
        && oleg3.checked) {
            console.log("test");
    } else if (anna1.checked && danil1.checked 
        && oleg2.checked 
        && nikita3.checked) {
            console.log("test");
    } else if (anna1.checked && oleg1.checked 
        && nikita2.checked 
        && danil3.checked) {
            console.log("test");
    } else if (anna1.checked && oleg1.checked 
        && nikita2.checked 
        && danil3.checked) {
            console.log("test");
    } else if (danil1.checked && nikita1.checked 
        && anna2.checked 
        && oleg3.checked) {
            console.log("test");
    } else if (danil1.checked && nikita1.checked 
        && oleg2.checked 
        && anna3.checked) {
            console.log("test");
    } else if (danil1.checked && oleg1.checked 
        && anna2.checked
        && nikita3.checked) {
            console.log("test");
    } else if (danil1.checked && oleg1.checked 
        && nikita2.checked 
        && anna3.checked) {
            console.log("test");
    } else if (oleg1.checked && nikita1.checked 
        && danil2.checked 
        && anna3.checked) {
            console.log("test");
    } else if (anna1.checked && danil1.checked 
        && anna2.checked 
        && danil3.checked) {
            console.log("test");
    }
}