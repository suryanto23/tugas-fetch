

// Ambil lah data dari API berikut “https://restcountries.eu/rest/v2/all”
// Gunakan async await
// Tampilkan seluruh bendera negara dan nama negaranya ke dalam dom


// Soal Nomor 2


let display = document.querySelector("#display")

// DOM
function summonDOM(param) {

    
    param.forEach( i => {

        let cards = document.createElement("DIV")
        cards.setAttribute("class","cards");

        cards.innerHTML = ` <div class="frame">
                            <img src="${i.flag}" alt=""></img>
                            </div>
                            <h3>${i.name}</h3>
                           `
        
        display.appendChild(cards);


        
    });



};


const ambilData = async () => {

    const API = "https://restcountries.eu/rest/v2/all"

    const option = {
                   method : "GET"   
                   }
    // API
    let data =  await fetch (API, option)
    // Tangkap data
    data = await data.json()
    // Lempar ke HTML dengan DOM
   summonDOM(data)

};

ambilData()
