


// const contohPromise = () => {

//     new Promise ((resolve, reject) => {

//         let condition = false;

//         if(condition){
//             resolve (`request sukses`)
//         } else {
//             reject (new Error(`terjadi kesalahan, abort mission`))
//         }

//     }) .then (result => console.log(result))
//        .catch (error => console.log(error))

// };

// contohPromise()





// Soal Nomor 1

// Lakukan pengambilan data yang berasal dari API berikut “https://api.github.com/users/<github_username>”

// -Gunakan promise utk mendapatkan data
// -Tampilkan data menggunakan DOM minimal nama, gambar profile, bio, followers, followings
// -Tampilkan serapih mungkin menggunakan CSS




let display = document.querySelector("#display");

// DOM function
function summonDOM(param) {

    // Bikin tag HTML
    display.innerHTML = ` <div class="frame">
                             <img src="https://avatars.githubusercontent.com/u/67571269?v=4" alt="profile">
                          </div>
                          <div class="info">  
                            <h3>${param.name}</h3> 
                            <p class="bio">${param.bio}</p>
                            <p class="followers">Followers : ${param.followers}</p>
                            <p class="following">Following : ${param.following}</p>
                          </div>`

};

const ambilDataAPI = () => {

    const API = "https://api.github.com/users/suryanto23"
    // Buka koneksi
    const option = {
        method: "GET"
    }
    // API github                
    fetch(API, option)

        // Terima data
        .then(response => response.json())
        // Buka data dan lempar ke HTML
        .then(data => summonDOM(data))
        // Exeption catch
        .catch(error => console.log(error, "ERROR, ga tau kenapa"))

};

ambilDataAPI()