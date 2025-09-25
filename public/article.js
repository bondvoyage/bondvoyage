const container = document.getElementById("articles");
const category = container?.dataset.category;

async function loadArticles() {
  if (!container) return;

  const spaceId = "<YOUR_SPACE_ID>";
  const accessToken = "<YOUR_CDA_TOKEN>";

  try {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=bondvoyage${
      category ? `&fields.category=${encodeURIComponent(category)}` : ""
    }`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();

    const items = data.items;

    if (!items.length) {
      container.innerHTML = "<p>No articles found.</p>";
      return;
    }

    items.forEach(item => {
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
