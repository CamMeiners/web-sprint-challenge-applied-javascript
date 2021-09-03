  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios";


const Card = (article) => {
const card = document.createElement('div');
const head = document.createElement('div');
const auth = document.createElement('div');
const imgContainer = document.createElement('div');
const img1 = document.createElement('img');
const author = document.createElement('span');

card.classList.add('card');
head.classList.add('headline');
auth.classList.add('author');
imgContainer.classList.add('img-container');

head.textContent = article.headline;
img1.src = article.authorPhoto;
author.textContent = article.authorName;

card.appendChild(head);
card.appendChild(auth);
auth.appendChild(imgContainer);
imgContainer.appendChild(img1);
auth.appendChild(author);

return card
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  const parent = document.querySelector(selector)
axios.get(`http://localhost:5000/api/articles`)
.then(res => {
  const wetCode = res.data;
  console.log(wetCode);
  const bootStrap = wetCode.articles.bootstrap;
  const javaScript = wetCode.articles.javascript;
  const jqueery = wetCode.articles.jquery;
  const node = wetCode.articles.node;
  const techno = wetCode.articles.technology;

  function buildCards(funnyTings){
    funnyTings.forEach(element => {
      const currentCard = Card(element);
        parent.appendChild(currentCard)

    })
  }
buildCards(bootStrap);
buildCards(javaScript);
buildCards(jqueery);
buildCards(node);
buildCards(techno);
})
}

export { Card, cardAppender }
