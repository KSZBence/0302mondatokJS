window.addEventListener("load", init);
function init(){
    const lista = [{
        nev: "Peti",
        mondat: "A kedd!",
    }, {
        nev: "Gergo",
        mondat: "A kedd masodszor!",
        szemszin: "Kek/Zold",
        kor: 23,
    }, {
        nev: "Niki",
        mondat: "Délelőtt kint játszottam a kutyussal"
    }, {
        nev: "Asztrik",
        mondat: "Kedden, mert ott nem történt semmi."
    }, {
        nev: "GergőT",
        mondat: "Kedd a legjóbb nap."
    }, {
        nev: "Sanyi",
        mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    }, {
        nev: "Márton",
        mondat: "Nem volt angol hétfőn"
    }, {
        nev: "Dominik",
        mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    }, {
        nev: "Marci",
        mondat: "Ha gyenge vagy akkor legalább ne sírj"
    }, {
        nev: "Bence",
        mondat: "Pillanat türelmet kérek javítom a mikrofont.",
    }, ];
    megjelenit(lista);
}

function megjelenit(lista){
    const article = document.getElementsByTagName("<article>");
    for(let i = 0; i < lista.length; i++){
        const div = document.createElement("div");
        const p = document.createElement("p");
        const h3 = document.createElement("h3");
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(h3);
        p.textContent = lista[i].mondat;
        h3.textContent = lista[i].nev;
    }
}