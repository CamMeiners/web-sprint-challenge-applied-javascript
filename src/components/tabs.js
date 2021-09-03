  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

import axios from "axios"

const Tabs = (topics) => {

  // //define elements 
  const topic = document.createElement('div')
  topic.classList.add('topics');
  for (let i =0; i < topics.length; i++){
    const topic1 = document.createElement('div');
    topic1.classList.add('tab');
    topic1.textContent = topics[i];
    topic.appendChild(topic1);
  }


  return topic;
}
 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabsAppender = (selector) => {
 axios.get (`http://localhost:5000/api/topics`)
 .then(res =>{
   const wtf = document.querySelector(selector)
   wtf.appendChild(Tabs(res.data.topics));
console.log(res.data.topics);
 })
 .catch(error => {
   console.error(error)
 })
}

export { Tabs, tabsAppender }
