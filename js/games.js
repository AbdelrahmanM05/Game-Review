import { Details } from "./details.js";
import { Display } from "./ui.js";
export class Games {
    constructor() {
        this.showData("mmorpg");
        this.navBar = document.querySelectorAll("#navBar ul li");
        this.navBar.forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector("#navBar .active").classList.remove("active");
                e.target.classList.add("active");
                let cat = e.target.getAttribute("data-category");
                this.showData(cat);
            });
        });

    }
    async showData(category) {
        let screen = new Display();
        let loader = document.querySelector("#loader");
        loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b5c9664fedmsha89498a6b435376p16a638jsn7c579472f07f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            }
        };
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const finalRes = await res.json();
        screen.displayGames(finalRes);
        this.createData();
        loader.classList.add("d-none");

    }
    createData() {
        const gameCard = document.querySelectorAll("#game");
        gameCard.forEach((item) => {
            item.addEventListener("click", (e) => {
                this.disDetails(e.currentTarget.getAttribute("data-code"));
            });
        });
    }
    disDetails(code) {
        let dark = new Details(code);
        let detailsRow = document.querySelector("#details");
        let gamesRow = document.querySelector("#games");
        gamesRow.classList.add("d-none");
        detailsRow.classList.remove("d-none");
    }
}





