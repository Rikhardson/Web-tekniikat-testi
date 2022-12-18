
getData();
//ei jäädä odottamaan
//tehdään muuta, lisätään vaikka elementtejä sivulle

async function getData(){
    const response = await fetch('https://random-data-api.com/api/v2/appliances?size=10');
    const taulu = await response.json();

    for(laite of taulu){
        let h = document.createElement("h4");
        h.textContent = laite.equipment;
        document.body.appendChild(h);
    
    }
}