window.addEventListener("load", init);

function init() {

    const list = [{
        szemszin: "barna",
        kor: 20,
        tesok: 2,
        nev: "Peti",
        mondat: "A kedd!"
    }, {
        szemszin: "barna",
        kor: 23,
        tesok: 2,
        nev: "Gergo",
        mondat: "A kedd masodszor!"
    }, {
        szemszin: "barna",
        kor: 20,
        tesok: 2,
        nev: "Niki",
        mondat: "Délelőtt kint játszottam a kutyussal"
    }, {
        szemszin: "kék",
        kor: 20,
        tesok: 2,
        nev: "Asztrik",
        mondat: "Kedden, mert ott nem történt semmi."
    }, {
        szemszin: "barna",
        kor: 20,
        tesok: 3,
        nev: "GergőT",
        mondat: "Kedd a legjóbb nap."
    }, {
        szemszin: "barna",
        kor: 20,
        tesok: 2,
        nev: "Sanyi",
        mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    }, {
        szemszin: "zöld",
        kor: 20,
        tesok: 2,
        nev: "Márton",
        mondat: "Nem volt angol hétfőn"
    }, {
        szemszin: "barna",
        kor: 20,
        tesok: 2,
        nev: "Dominik",
        mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    }, {
        szemszin: "barna",
        kor: 21,
        tesok: 2,
        nev: "Marci",
        mondat: "Ha gyenge vagy akkor legalább ne sírj"
    }, {
        szemszin: "kék",
        kor: 20,
        tesok: 4,
        nev: "Bence",
        mondat: "Pillanat türelmet kérek javítom a mikrofont."
    } ];

    //megjelenit(lista);
    tablazat(list);
    atlageletkor(list);
    gomb(list);
}

function gomb(lista){
    console.log("test")
    const tgomb = document.querySelectorAll("table button");
    for (let i = 0; i < tgomb.length; i++){
        console.log(tgomb[i])
        tgomb[i].addEventListener("click",function(){
            console.log(tgomb[i])
            torles(i, lista)
        })
    }
    console.log(tgomb)
}

function torles(i, lista){
    //this -> az az elem ami az eseményt kiváltotta
    lista.splice(i, 1)
    console.log(lista)
    tablazat(lista)
}

function megjelenit(lista) {
    const article = document.getElementsByTagName("article")[0];
    for (let i = 0; i < lista.length; i++) {
        const div = elemLetrehoz("div");
        const p = elemLetrehoz("p");
        const h3 = elemLetrehoz("h3");
        article.appendChild(div);
        div.appendChild(h3);
        div.appendChild(p);
        p.textContent = lista[i].mondat;
        h3.textContent = lista[i].nev;
    }
}

function elemLetrehoz(elemnev) {
    elem = document.createElement(elemnev);
    return elem;
}

function tablazat(lista) {
    const article = document.getElementsByTagName("article")[0];
    article.innerHTML = `<table><tbody><tr>
        <th>nev</th>
        <th>mondat</th>
        </tr></tbody></table>`;
    const tbody = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i < lista.length; i++) {
        tbody.innerHTML += `<tr>
            <td>${lista[i].nev}</td>
            <td>${lista[i].mondat}</td>
            <td><button>törlés</button></td>
        </tr>`
    }
    
}

function atlageletkor(lista){
    let osszeletkor = 0;
    for (let i = 0; i < lista.length; i++){
        osszeletkor += lista[i].kor;
    }
    const article = document.getElementsByTagName("article")[0];
    article.innerHTML += `<h3>Az emberek átlag életkora: ${osszeletkor/lista.length} év.</h3>`
}

