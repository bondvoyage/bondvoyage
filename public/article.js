const container = document.getElementById("articles");
const category = container?.dataset.category;

function extractPlainText(richText) {
  if (!richText || !richText.content) return "";
  return richText.content
    .map(node => {
      if (node.nodeType === "paragraph" && node.content) {
        return node.content.map(c => c.value || "").join("");
      }
      return "";
    })
    .join("\n\n");
}

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
      const author = item.fields.author || "Unknown";
      const date = item.fields.date || "";
      const categoryName = item.fields.category || "";

      const bodyText = extractPlainText(item.fields.body);

      articleDiv.innerHTML = `
        <h2>${title}</h2>
        <p><em>${author} — ${date} (${categoryName})</em></p>
        <p>${bodyText}</p>
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
