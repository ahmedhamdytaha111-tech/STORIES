// قراءة ملف القصص
fetch("stories.json")
  .then(res => res.json())
  .then(data => {
    const storiesList = document.getElementById("stories");
    const storyContainer = document.getElementById("story");

    // عرض أسماء القصص
    data.forEach((story, index) => {
      const li = document.createElement("li");
      li.innerText = story.title;
      li.onclick = () => showStory(index, data);
      storiesList.appendChild(li);
    });

    function showStory(index, data) {
      storyContainer.innerHTML = ""; // مسح القديم
      const story = data[index];

      // لو القصة فيها أجزاء
      if (story.parts.length > 1 && story.parts[0].part) {
        story.parts.forEach(part => {
          const btn = document.createElement("button");
          btn.innerText = "الجزء " + part.part;
          btn.onclick = () => showPart(part);
          storyContainer.appendChild(btn);
        });
      } else {
        // لو القصة كلها مرة واحدة
        showPart(story.parts[0]);
      }
    }

    function showPart(part) {
      storyContainer.innerHTML = "";
      const partDiv = document.createElement("div");
      partDiv.className = "story-part";

      part.content.forEach(line => {
        const p = document.createElement("p");
        p.innerText = line;
        partDiv.appendChild(p);
      });

      storyContainer.appendChild(partDiv);
    }
  })
  .catch(error => {
    document.getElementById("story").innerText = "في مشكلة في قراءة القصص: " + error;
  });
