
let news = []
let menus = document.querySelectorAll(".menus button")
menus.forEach((menu) => menu.addEventListener("click", (event) => getNewsByTopic(event)))
//Call Api
// Asynchronous 처리. 
// Async 없이 await 은 없음. 
const getLatestNews = async() => {
    // class 만들때 new 를 사용해서 객체 생성.
    let url =  new URL(### API ADDRESS GOES HERE ###)
    // key 입력 (header) <Headers Class> 
    let header = new Headers({'##API_KEY_GOES_HERE})

    let response = await fetch(url,{headers: header}); // ajax, fetch, axios

    // 결과물에서 뽑아내는 작업을 해야댐. 
    let data = await response.json()
    // json 은 자료형 타입.
    console.log("this is data", data);
    news = data.articles
    console.log(news);

    render()

};
const getNewsByTopic = async (event) => {
    //textContent 는 태그안에있는 내용만 가지고 옴. 
    // toLowerCase 로 소문자로 만들어줌. 
    let topic = event.target.textContent.toLowerCase()
    console.log("Clicked",topic);
    let url = new URL(### API ADDRESS GOES HERE ###
        );
    console.log("link",url);
    let header = new Headers({'##API_KEY_GOES_HERE})
    let response = await fetch(url,{headers: header}); // ajax, fetch, axios
    let data = await response.json()
    news = data.articles;
    console.log("news",data)
    render();

};
const render = () => {
    let newsHTML = ''
    // 맵의 결과물은 Array 값. 그래서 " , 를 없애기위해서 string 값으로 변환. "
    // join method 사용 // 
    newsHTML = news.map(item => {
        return `<div class = "row news">
        <div class = "col-lg-4">
            <img class = "news-img-size" src="${item.media}">

        </div>
        <div class="col-lg-8">
            <h2> ${item.title} 
            </h2>

            <p>
                ${item.summary}
            </p>
            <div>
               ${item.published_date} * ${item.rights}
            </div>

        </div>
    </div>
        `
    }).join('');


    document.getElementById("news-board").innerHTML = newsHTML;
};
getLatestNews();