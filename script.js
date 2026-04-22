// قراءة ملف القصة الواحدة
fetch("story.json")
  .then(res => res.json())
  .then(data => {
    // عرض العنوان
    document.getElementById("title").innerText = data.title;

    // عرض الأجزاء
    const storyContainer = document.getElementById("story");
    data.parts.forEach(part => {
      const partDiv = document.createElement("div");
      partDiv.className = "story-part";

      part.content.forEach(line => {
        const p = document.createElement("p");
        p.innerText = line;
        partDiv.appendChild(p);
      });

      storyContainer.appendChild(partDiv);
    });
  })
  .catch(error => {
    document.getElementById("story").innerText = "في مشكلة في قراءة القصة: " + error;
  });
