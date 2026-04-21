async function loadStories() {
  const response = await fetch("stories.json");
  const data = await response.json();
  displayStories(data);
}

function displayStories(stories) {
  const container = document.getElementById("stories");
  container.innerHTML = "";

  stories.forEach((story) => {
    const title = document.createElement("h3");
    title.textContent = story.title;
    title.style.cursor = "pointer";

    // عند الضغط على العنوان
    title.addEventListener("click", () => {
      showParts(story.parts, story.title);
    });

    container.appendChild(title);
  });
}

function showParts(parts, storyTitle) {
  const container = document.getElementById("stories");
  container.innerHTML = `<h2>${storyTitle}</h2>`;

  parts.forEach((part, index) => {
    const btn = document.createElement("button");
    btn.textContent = `الجزء ${index + 1}`;
    btn.addEventListener("click", () => {
      showContent(part, storyTitle, index + 1);
    });
    container.appendChild(btn);
  });
}

function showContent(content, storyTitle, partNumber) {
  const container = document.getElementById("stories");
  container.innerHTML = `<h2>${storyTitle} - الجزء ${partNumber}</h2><p>${content}</p>`;
}

loadStories();
