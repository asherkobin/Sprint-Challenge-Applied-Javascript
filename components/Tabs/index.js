// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsElement = document.querySelector("div.topics");

function Topic(topicName) {
  const topic = document.createElement("div");
  topic.classList.add("tab");
  topic.textContent = topicName;

  return topic;
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    const topics = res.data.topics;
    topics.forEach(topic => {
      const topicText = topic;
      topicsElement.appendChild(Topic(topicText));
    });
  });