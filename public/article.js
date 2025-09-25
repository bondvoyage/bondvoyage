const container = document.getElementById("articles");
const category = container?.dataset.category;

async function loadArticles() {
  if (!container) return;

  try {
    const res = await fetch(
      `/api/articles${category ? `?category=${encodeURIComponent(category)}` : ""}`
    );
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

      const preview = item.fields.summary ||
        (item.fields.body?.content
          ?.map(node =>
            node.nodeType === "paragraph"
              ? node.content.map(c => c.value || "").join("")
              : ""
          )
          .join("\n\n")
          .slice(0, 200) + "...") ||
        "[No preview available]";

      articleDiv.innerHTML = `
        <h2 class="article-title" style="cursor:pointer;color:blue;text-decoration:underline;" data-id="${item.sys.id}">
          ${title}
        </h2>
        <p>${preview}</p>
        <hr>
      `;

      container.appendChild(articleDiv);
    });

    document.querySelectorAll(".article-title").forEach(titleEl => {
      titleEl.addEventListener("click", () => {
        const id = titleEl.dataset.id;
        window.location.href = `article.html?id=${id}`;
      });
    });

  } catch (err) {
    console.error("Error loading articles:", err);
    container.innerHTML = "<p>Failed to load articles.</p>";
  }
}

loadArticles();
