import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const container = document.getElementById("articles");

if (container) {
  const category = container.dataset.category;

  async function loadArticles() {
    try {
      const res = await fetch(`/api/articles${category ? `?category=${encodeURIComponent(category)}` : ""}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const articles = await res.json();

      if (!Array.isArray(articles) || articles.length === 0) {
        container.innerHTML = "<p>No articles found.</p>";
        return;
      }

      articles.forEach(item => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const title = item.fields.title || "Untitled";
        const author = item.fields.author || "Unknown";
        const date = item.fields.date || "";
        const category = item.fields.category || "";

        let bodyHTML = "";
        if (item.fields.body) {
          try {
            bodyHTML = documentToHtmlString(item.fields.body);
          } catch (e) {
            console.error("Error rendering rich text:", e);
            bodyHTML = "<p>[Error rendering content]</p>";
          }
        }

        articleDiv.innerHTML = `
          <h2>${title}</h2>
          <p><em>${author} — ${date} (${category})</em></p>
          <div class="body">${bodyHTML}</div>
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
}
