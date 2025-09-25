function renderRichText(richText) {
    let html = "";
    if (!richText || !richText.content) return "";

    richText.content.forEach(node => {
        switch (node.nodeType) {
            case "paragraph":
                html += "<p>";
                if (node.content) {
                    node.content.forEach(c => {
                        html += c.value || "";
                    });
                }
                html += "</p>";
                break;

            case "heading-1":
                html += `<h1>${node.content.map(c => c.value || "").join("")}</h1>`;
                break;

            case "heading-2":
                html += `<h2>${node.content.map(c => c.value || "").join("")}</h2>`;
                break;

            case "embedded-asset-block":
                const url = node.data.target.fields.file.url;
                const alt = node.data.target.fields.title || "";
                html += `<img src="${url}" alt="${alt}" style="max-width:100%; margin:20px 0;">`;
                break;

        }
    });

    return html;
}

async function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const container = document.getElementById("article");

    if (!id) {
        container.innerHTML = "<p>Article not found.</p>";
        return;
    }

    try {
        const res = await fetch(`/api/articles?id=${id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const items = await res.json();
        if (!items.length) {
            container.innerHTML = "<p>Article not found.</p>";
            return;
        }

        const item = items[0];
        const title = item.fields.title || "Untitled";
        const body = renderRichText(item.fields.body);

        container.innerHTML = `
            <h1>${title}</h1>
            ${body}
        `;
    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Failed to load article.</p>";
    }
}

loadArticle();
