const container = document.getElementById("articles");
const category = container?.dataset.category;

async function loadArticles() {
  if (!container) return;

  try {
    const res = await fetch(`/api/articles${category ? `?category=${encodeURIComponent(category)}` : ""}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const articles = await res.json();

    if (!articles.length) {
      container.innerHTML = "<p>No articles found.</p>";
      return;
    }

    articles.forEach(item => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("article");

      const title = item.fields.title || "Untitled";
      const body = item.fields.body?.content
        ?.map(node =>
          node.nodeType === "paragraph"
            ? node.content.map(c => c.value || "").join("")
            : ""
        )
        .join("\n\n");

      articleDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <hr>
      `;

      container.appendChild(articleDiv);
    });
  } catch (err) {
    console.error("Error loading articles:", err);
    container.innerHTML = "<p>Failed to load articles.</p>";
  }
}

loadArticles();
