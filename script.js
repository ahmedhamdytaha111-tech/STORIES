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

    title.addEventListener("click", () => {
      showParts(story.parts, story.title, stories);
    });

    container.appendChild(title);
  });
}

function showParts(parts, storyTitle, allStories) {
  const container = document.getElementById("stories");
  container.innerHTML = `<h2>${storyTitle}</h2>`;

  parts.forEach((part, index) => {
    const btn = document.createElement("button");
    btn.textContent = `الجزء ${index + 1}`;
    btn.addEventListener("click", () => {
      showContent(part, storyTitle, index + 1, allStories);
    });
    container.appendChild(btn);
  });

  // زر رجوع للقائمة الرئيسية
  const backBtn = document.createElement("button");
  backBtn.textContent = "رجوع للقائمة";
  backBtn.addEventListener("click", () => {
    displayStories(allStories);
  });
  container.appendChild(backBtn);
}

function showContent(content, storyTitle, partNumber, allStories) {
  const container = document.getElementById("stories");
  container.innerHTML = `<h2>${storyTitle} - الجزء ${partNumber}</h2><p>${content}</p>`;

  // زر رجوع للأجزاء
  const backBtn = document.createElement("button");
  backBtn.textContent = "رجوع للأجزاء";
  backBtn.addEventListener("click", () => {
    showParts(allStories.find(s => s.title === storyTitle).parts, storyTitle, allStories);
  });
  container.appendChild(backBtn);
}

loadStories();
