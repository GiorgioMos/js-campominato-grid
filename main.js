



let numCelle = 100;
let grid = document.getElementById("grid");



document.getElementById("start").addEventListener("click", function() {
    console.log("inizio partita");
    creaGriglia();
});

function creaGriglia() {
    let numCelle = 100;
    let grid = document.getElementById("grid");

    for (let i = 1; i <= numCelle; i++) {
    
        let cella = creaQuadrato(i);
        grid.appendChild(cella);
    
    }

}

function creaGriglia() {
    let numCelle = 100;
    let grid = document.getElementById("grid");

    // Clear the existing grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 1; i <= numCelle; i++) {
        let cella = creaQuadrato(i);
        grid.appendChild(cella);
    }
}



function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerText = numero;

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function() {

        console.log("Cella cliccata", numero);

        //versione abbreviata
        cella.classList.toggle("highlight");

    });

    return cella;
}