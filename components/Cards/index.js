// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleContainer = document.querySelector("div.cards-container");

function Article(articleInfo) {
  const article = document.createElement("div");
  article.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = articleInfo.headline;
  article.appendChild(headline);
  const author = document.createElement("div");
  author.classList.add("author");
  article.appendChild(author);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.appendChild(imgContainer);
  const img = document.createElement("img");
  img.src = articleInfo.authorPhoto;
  imgContainer.appendChild(img);
  const authorName = document.createElement("span");
  authorName.textContent = articleInfo.authorName;
  author.appendChild(authorName);

  return article;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const articles = res.data["articles"]["javascript"];
    articles.forEach(articleInfo => {
      articleContainer.appendChild(Article(articleInfo));
    });
  });