import { createClient } from "contentful";

export default async function handler(req, res) {
  console.log(process.env.CONTENTFUL_CDA_TOKEN, process.env.CONTENTFUL_SPACE_ID)
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_CDA_TOKEN
    });

    const { category } = req.query;

    const entries = await client.getEntries({
      content_type: "article",
      ...(category && { "fields.category": category })
    });

    res.status(200).json(entries.items);
  } catch (err) {
    console.error("Error fetching from Contentful:", err);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
}
