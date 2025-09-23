const container = document.getElementById("articles");
const category = container.dataset.category;

async function loadArticles() {
  try {
    const res = await fetch(`/api/articles${category ? `?category=${category}` : ""}`);
    const articles = await res.json();

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
  }
}

loadArticles();
