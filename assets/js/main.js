// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.



const ourTeam = [
    {
        "Name":"Wayne Barnett",
        "Role":"Founder & CEO",
        "Image":"./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Name":"Angela",
        "Role":"Chief Editor",
        "Image":"./assets/img/angela-caroll-chief-editor.jpg"
    },
    {
        "Name":"Waleter gordon",
        "Role":" Chief Editor",
        "Image":"./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        "Name":"Scott Estrada",
        "Role":"Developer",
        "Image":"./assets/img/scott-estrada-developer.jpg"
    },
    {
        "Name":"Wayne Barnett",
        "Role":"Founder & CEO",
        "Image":"./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Name":"Barbara Ramos",
        "Role":"Grafic designer",
        "Image":"./assets/img/barbara-ramos-graphic-designer.jpg"
    }
]


// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

//per ogni oggetto dell'array
for (let i = 0; i < ourTeam.length; i++) {
  
    //faccio un for in e stampo le proprietà
    for (let x in ourTeam[i]) {
        console.log(ourTeam[i][x]);
      }
}

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe