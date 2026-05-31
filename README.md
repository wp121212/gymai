# Weight Tracker (Notion → Vercel)

## Setup

### 1. Notion Integration
- Wejdź na https://www.notion.so/profile/integrations
- Kliknij "New integration" → nazwij np. "Weight Tracker"
- Skopiuj **Internal Integration Secret** (zaczyna się od `ntn_...`)
- Wróć do bazy "Waga" w Notion → kliknij ••• → Connections → dodaj swoją integrację

### 2. ID bazy danych
- Otwórz bazę "Waga" w przeglądarce
- URL wygląda tak: `https://www.notion.so/XXXXXX?v=YYYYYY`
- Skopiuj część `XXXXXX` (32 znaki) — to jest DB ID
- Twoje DB ID: `e00be3aab92e4f75987ab0df84eafede`

### 3. Deploy na Vercel
- Wrzuć ten folder na GitHub (nowe repo)
- Wejdź na vercel.com → New Project → importuj repo
- W Settings → Environment Variables dodaj:
  - `NOTION_API_KEY` = twój secret z kroku 1
  - `NOTION_DB_ID` = `e00be3aab92e4f75987ab0df84eafede`
- Deploy

Gotowe. Strona automatycznie ciągnie dane z Notion.
