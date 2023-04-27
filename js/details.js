import { Display } from "./ui.js";
export class Details {
    constructor(gameCode) {
        this.details = document.querySelector("#detailsRow");
        this.screen = new Display();
        this.showDetails(gameCode);
        document.querySelector(".btn-close").addEventListener("click", () => {
            document.querySelector("#games").classList.remove("d-none");
            document.querySelector("#details").classList.add("d-none");
        });
    }
    async showDetails(code) {
        let loader = document.querySelector("#loader");
        loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b5c9664fedmsha89498a6b435376p16a638jsn7c579472f07f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${code}`, options)
        let finalRes = await res.json();
        loader.classList.add("d-none");
        this.screen.displayDetails(finalRes);
    }
}





