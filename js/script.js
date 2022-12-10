/* Ajax request to fetch the data */
let http = new XMLHttpRequest();

http.open('get', 'js/database.json', true);

http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status == 200) {
        let galleryData = JSON.parse(this.responseText);

        let output = "";

        for(let item of galleryData) {
            output += `                                
                <a href="${item.image}" data-lightbox="models" data-title="${item.description}">
                    <div class="card">
                        <img src="${item.image}" />
                            <div class="overlay">
                                <h1>${item.title}</h1>                    
                            </div>
                    </div>
                </a>                
            `;
        }

        document.querySelector(".galleryData").innerHTML = output;
    }
}



// Get The Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle The Navbar Menu onClick Open/Close
menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});

// Get The Current Year And Add It Into The Html
document.querySelector(".year").innerHTML = new Date().getFullYear();