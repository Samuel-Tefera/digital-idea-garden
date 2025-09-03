# Digital Idea Garden

**Digital Idea Garden** is a creative companion app where ideas grow like plants.
Capture your sparks as **Seeds**, refine them into **Sprouts**, and nurture them into full **Plants**. With reflections, AI-powered suggestions, and progress tracking, this app helps you organize, grow, and never lose sight of your ideas.

---

## Features

- **User Authentication**
  - Secure sign-up and login using Google or email/password (NextAuth + Supabase).
- **Idea Lifecycle**
  - Create and manage ideas through growth stages: _Seed → Sprout → Plant_.
- **Reflections**
  - Add thoughts, notes, and progress updates to ideas over time.
- **AI Suggestions**
  - Get smart recommendations for developing and connecting your ideas.
- **Dashboard**
  - Personal space showing all your ideas and their current stage.
- **Clean UI**
  - Minimal design with garden-inspired colors, dark mode support, and smooth navigation.

---

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Authentication:** next-auth.js
- **Backend & Database:** Supabase
- **AI Integration:** Free AI API (configurable)

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/digital-idea-garden.git
   cd digital-idea-garden
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   Create a .env.local file with:

```bash
  NEXTAUTH_SECRET=your_secret
  NEXTAUTH_URL=http://localhost:3000
  SUPABASE_URL=your_supabase_url
  SUPABASE_KEY=your_supabase_key
  GEMINI_API_KEY=your_gemini_api_key
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  NEXT_PUBLIC_BASE_URL=http://localhost:3000  # FOR DEVELOPMENT
  NEXTAUTH_URL=http://localhost:3000  # FOR DEVELOPMENT
  NEXTAUTH_SECRET=your_nextauth_client_secret
```

4. **Run the app**

```bash
   npm run dev
```

## License
