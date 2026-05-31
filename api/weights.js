const { Client } = require("@notionhq/client");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const dbId = process.env.NOTION_DB_ID;

  try {
    const { results } = await notion.databases.query({
      database_id: dbId,
      sorts: [{ property: "Data", direction: "ascending" }],
    });

    const data = results.map((p) => {
      const props = p.properties;
      const date = props["Data"]?.date?.start || null;
      const weight = props["Waga (kg)"]?.number ?? null;
      const title = props["Dzień"]?.title?.[0]?.plain_text || "";
      return { date, weight, title };
    });

    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
