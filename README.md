<div align="center">
  <img src="/public/logo.png" alt="Game-Hub Logo" width="200" />
  <h1>🎮 Game-Hub</h1>
  <p><strong>Discover. Explore. Play.</strong> — Your ultimate gaming discovery platform</p>
  <a href="https://game-hub1.netlify.app/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-8B5CF6?style=for-the-badge&logo=netlify&logoColor=white" />
  </a>
  <a href="https://github.com/HamiParsa/Game-Hub">
    <img src="https://img.shields.io/badge/📂_Source_Code-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</div>

---

## 📖 About The Project

**Game-Hub** is a modern gaming discovery web application built with **Next.js** and **TypeScript**. It leverages the **RAWG Video Games Database API** to provide users with a comprehensive database of games, allowing them to browse, search, filter, and explore detailed information about their favorite titles.

The platform features a clean, responsive interface with dark/light mode support, smooth animations, and real-time data fetching for an optimal user experience.

---

## ✨ Features

### 🎯 Core Features

| Feature | Description |
|---------|-------------|
| 🎮 **Game Discovery** | Browse thousands of games with infinite scroll |
| 🔍 **Advanced Search** | Search games by title, genre, or platform |
| 🏷️ **Smart Filtering** | Filter by genre, platform, rating, and release year |
| 📊 **Game Details** | View detailed info including ratings, reviews, and screenshots |
| 🌙 **Dark/Light Mode** | Seamless theme switching with persistent preference |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| ⚡ **Real-time Data** | Live updates from RAWG API |
| 🎨 **Smooth Animations** | Fluid transitions and micro-interactions |

---

## 🖼️ Screenshots

<div align="center">
  <h3>🏠 Home Page</h3>
  <img src="/public/screenshots/home.png" alt="Game-Hub Home Page" width="800" />
  <br/>
  <p><em>Browse and discover thousands of games</em></p>
  
  <br/><br/>
  
  <h3>🎮 Game Details</h3>
  <img src="/public/screenshots/details.png" alt="Game Details Page" width="800" />
  <br/>
  <p><em>View detailed information about each game</em></p>
  
  <br/><br/>
  
  <h3>🔍 Search & Filters</h3>
  <img src="/public/screenshots/search.png" alt="Search & Filters" width="800" />
  <br/>
  <p><em>Filter and search games by genre, platform, and more</em></p>
  
  <br/><br/>
  
  <h3>🌙 Dark Mode</h3>
  <img src="/public/screenshots/dark-mode.png" alt="Dark Mode" width="800" />
  <br/>
  <p><em>Seamless dark/light theme switching</em></p>
  
  <br/><br/>
  
  <h3>📱 Mobile Responsive</h3>
  <img src="/public/screenshots/mobile.png" alt="Mobile Responsive" width="400" />
  <br/>
  <p><em>Optimized for all devices</em></p>
</div>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **State Management** | Zustand |
| **Data Fetching** | React Query |
| **API Client** | Axios |
| **API** | RAWG Video Games Database API |
| **Icons** | React Icons |
| **Deployment** | Netlify |

</div>

---

## 📁 Project Structure

```
Game-Hub/
├── 📁 app/
│   ├── 📁 (routes)/
│   │   ├── 📁 games/          # Game listing page
│   │   ├── 📁 game/[id]/      # Game details page
│   │   └── 📁 search/         # Search results page
│   ├── 📁 api/                # API routes
│   ├── 📁 components/         # Shared components
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 store/              # Zustand stores
│   ├── 📁 types/              # TypeScript interfaces
│   ├── 📁 utils/              # Utility functions
│   └── 📁 styles/             # Global styles
├── 📁 public/                 # Static assets
│   ├── 📁 screenshots/        # Screenshots for README
│   └── 📁 icons/              # Icons and logos
├── 📄 next.config.ts
├── 📄 tsconfig.json
├── 📄 tailwind.config.js
├── 📄 package.json
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- RAWG API Key ([Get it here](https://rawg.io/apidocs))

### Installation

```bash
# Clone the repository
git clone https://github.com/HamiParsa/Game-Hub.git

# Navigate to project
cd Game-Hub

# Install dependencies
npm install

# Set up environment variables
echo "NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_RAWG_API_KEY=your_rawg_api_key_here
NEXT_PUBLIC_API_BASE_URL=https://api.rawg.io/api
```

---

## 🧠 Key Components

### 🎴 GameCard
Displays game information including title, image, rating, and platforms in a responsive card layout with hover animations.

### 🧭 Navbar
Fully responsive navigation with mobile menu, search functionality, and theme toggle.

### 🔍 Filters
Advanced filtering system for genre, platform, rating range, and release year.

### 📋 GameDetails
Comprehensive game information including screenshots, trailers, system requirements, and user reviews.

### 🔎 SearchBar
Real-time search with debouncing and auto-suggestions.

---

## 📦 Dependencies

### Core
- `next`: ^15.0.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `typescript`: ^5.0.0

### UI & Styling
- `tailwindcss`: ^3.4.0
- `framer-motion`: ^11.0.0
- `react-icons`: ^5.0.0

### State & Data
- `zustand`: ^5.0.0
- `@tanstack/react-query`: ^5.0.0
- `axios`: ^1.6.0

---

## 🚀 Future Enhancements

- [ ] User authentication with NextAuth.js
- [ ] Personal game library and wishlist
- [ ] User reviews and ratings system
- [ ] Social sharing features
- [ ] Multi-language support (i18n)
- [ ] PWA support for offline access
- [ ] Integration with Steam API
- [ ] Push notifications for game releases

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

<div align="center">
  <a href="https://github.com/hamiparsa">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/hamiparsa">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://twitter.com/hamiparsa">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
  </a>
</div>

---

<div align="center">
  <br/>
  <sub>Built with ❤️ by <a href="https://github.com/hamiparsa">Hami Parsa</a></sub>
  <br/><br/>
  <img src="https://skillicons.dev/icons?i=react,next,typescript,tailwind,framer" />
</div>
