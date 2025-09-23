import { createClient } from "contentful";

const contentful = require("contentful");

module.exports = async (req, res) => {
  // Log environment variables to check they are set
  console.log("SPACE_ID:", process.env.CONTENTFUL_SPACE_ID);
  console.log("CDA_TOKEN:", process.env.CONTENTFUL_CDA_TOKEN);

  try {
    const client = contentful.createClient({
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
};
