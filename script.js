async function loadStories() {
  const response = await fetch("stories.json");
  const data = await response.json();
  displayStories(data);
}

function displayStories(stories) {
  const container = document.getElementById("stories");
  container.innerHTML = "";
  stories.forEach((story) => {
    const div = document.createElement("div");
    div.className = "story";
    div.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;
    container.appendChild(div);
  });
}

loadStories();
