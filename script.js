// f75d58d59ee64f508d8c0a27862ea597
// https://newsapi.org/docs/endpoints/everythinghttps://newsapi.org/docs/endpoints/everything

let cards_container = document.getElementById("cards-container");
let news_section = document.getElementById("news-section");
let cta_section = document.getElementById("cta-container")

let state = {
    news : [],
    setNews(new_state){
        this.new = [...new_state]
    }
}


function fetchData(){
    fetch(url)
    .then(response => response.json())
    .then((data)=>{
        return data;
    })
}

function renderUI(){
    if(state.news.length === 0){
        let err_html = `
            <div class="error-text-container">
                <p class="error-text">No news found!</p>
            </div>
        `

        news_section.insertAdjacentHTML("beforeend", err_html)

        // cta_section.classList.add("display")
        cards_container.innerHTML = "";
    }

}


window.addEventListener("load", ()=>{
    renderUI();
})