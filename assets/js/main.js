// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.



const ourTeam = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela",
        "role": "Chief Editor",
        "image": "./assets/img/angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Waleter gordon",
        "role": " Chief Editor",
        "image": "./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "./assets/img/scott-estrada-developer.jpg"
    },
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Grafic designer",
        "image": "./assets/img/barbara-ramos-graphic-designer.jpg"
    }
]


// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

// //per ogni oggetto dell'array
// for (let i = 0; i < ourTeam.length; i++) {

//     //faccio un for in e stampo le proprietà
//     for (let x in ourTeam[i]) {
//         console.log(ourTeam[i][x]);
//       }
// }

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

//prima mi seleziono l'elemento della dom nella quale stampare le info

const divEl = document.querySelector(".container");


//per ogni oggetto dell'array
for (let i = 0; i < ourTeam.length; i++) {

    //creo un div da inserire nel container
    const childEl = document.createElement("div");
    //gli do la larghezza di 1/3
    childEl.style.width = "calc(100% / 3)";
    childEl.style.marginTop="4rem"


    //faccio un for in e stampo le proprietà
    for (let x in ourTeam[i]) {

        //se la proprietà è l'img faccio un elemento img altrimenti testo
        if (x == "image") {

            //creo l'elemento da aggiungere al div
            const underChildEl = document.createElement("img");

            underChildEl.src = ourTeam[i][x]


            childEl.appendChild(underChildEl);

        } else {
            //mi salvo la stringa e poi la aggiungo al div
            const stringResult = ourTeam[i][x] + '\n';

            //creo l'elemento da aggiungere al div
            const underChildEl = document.createElement("h3");
            underChildEl.innerText = stringResult;
            childEl.appendChild(underChildEl);
            console.log(childEl);
        }

    }

    divEl.appendChild(childEl)

}