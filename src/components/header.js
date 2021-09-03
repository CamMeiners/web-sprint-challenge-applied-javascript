  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
//define elements
const firstDiv = document.createElement('div');
const today = document.createElement('span');
const theTitle = document.createElement('h1');
const heat = document.createElement('span');

//structure of elements
firstDiv.appendChild(today);
firstDiv.appendChild(theTitle);
firstDiv.appendChild(heat);

//class names
firstDiv.classList.add('header');
today.classList.add('date');
heat.classList.add('temp');
//text content
today.textContent = date;
theTitle.textContent = title;
heat.textContent = temp;

return firstDiv;
}

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
const headerAppender = (selector) => {
const know = document.querySelector(selector);
know.appendChild(Header('Lambda Times', 'January 6, 2021', '26' ))
}

export { Header, headerAppender }
