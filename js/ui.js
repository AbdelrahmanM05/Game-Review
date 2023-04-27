export class Display {
    displayGames(result) {
        let gamesBox = ``;
        for (let i = 0; i < result.length; i++) {
            gamesBox += `
                <div class="col-md-3">
                    <div class="card bg-dark mb-3 h-100"  role="button" id="game" data-code="${result[i].id}">
                        <div class="card-header bg-transparent border-bottom-0">
                            <img src="${result[i].thumbnail}" class="img-fluid h-100 rounded-1" alt="">
                        </div>
                        <div class="card-body px-2 text-center text-secondary-emphasis">
                            <div class="header d-flex justify-content-between">
                                <h5 class="card-title fa-1x text-white">${result[i].title}</h5>
                                <h5 class="p-2 badge h-50 free">Free</h5>
                            </div>
                            <p class="card-text">${result[i].short_description}</p>
                        </div>
                        <div
                            class="card-footer d-flex justify-content-between bg-transparent border-top border-secondary">
                            <span class="text-bg-secondary badge ">${result[i].genre}</span>
                            <span class="text-bg-secondary badge ">${result[i].platform}</span>
                        </div>
                    </div>
                </div>
         `;
        }

        document.getElementById("gamesRow").innerHTML = gamesBox;
    }

    displayDetails(result) {
        const content = `
      <div class="col-md-4">
      <img src="${result.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${result.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${result.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${result.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${result.status}</span> </p>
      <p >${result.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${result.game_url}">Show Game</a>
   </div>
      
      `;

        document.getElementById("detailsRow").innerHTML = content;
    }
}