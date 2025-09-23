// articles.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articles");
  if (!container) return;

  const category = container.dataset.category || "";

  async function loadArticles() {
    try {
      const res = await fetch(`/api/articles${category ? `?category=${category}` : ""}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const articles = await res.json();

      if (articles.length === 0) {
        container.innerHTML = "<p>No articles found.</p>";
        return;
      }

      articles.forEach(item => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        articleDiv.innerHTML = `
          <h2>${item.fields.title}</h2>
          <p>${item.fields.body}</p>
          <a href="${item.fields.url || '#'}">Read more</a>
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
});
