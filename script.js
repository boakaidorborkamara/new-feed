// f75d58d59ee64f508d8c0a27862ea597
let api_key = "pub_2a6a6d3b545a4bc2b5afe031f938fbe5";
let base_url = "https://newsdata.io/api/1/latest";

// https://newsdata.io/api/1/latest?apikey=pub_2a6a6d3b545a4bc2b5afe031f938fbe5
// https://newsapi.org/docs/endpoints/everythinghttps://newsapi.org/docs/endpoints/everything

let cards_container = document.getElementById("cards-container");
let news_section = document.getElementById("news-section");
let cta_section = document.getElementById("cta-container");

let state = {
  news: [],
  setState(new_state) {
    this.new = {...new_state};
    renderUI();
  },
};

async function fetchData(url) {
  console.log("url", url);

  try {
    let response = await fetch(url, {
      method: "GET",
      headers: { "X-ACCESS-KEY": api_key },
    });

    if(!response.ok){
        throw new Error()
    }

    let data = await response.json();

    console.log(data);

    return data;
  } catch (err) {
    console.log("error", err);
  }

}

function renderUI() {
  if (state.news.length === 0) {
    let err_html = `
            <div class="error-text-container">
                <p class="error-text">No news found!</p>
            </div>
        `;

    news_section.insertAdjacentHTML("beforeend", err_html);

    // cta_section.classList.add("display")
    cards_container.innerHTML = "";
  }
}

window.addEventListener("load", async () => {

  let news = await fetchData(base_url);

  state.setState(news);

  console.log("news", news);


});
