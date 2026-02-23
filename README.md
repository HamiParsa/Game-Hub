<div align="center">
  <img src="https://skillicons.dev/icons?i=react,next,typescript,tailwind,framer" alt="Tech Stack" />
  
  <h1>🎮 Game-Hub</h1>
  <p>Discover, explore, and track your favorite games with this modern gaming platform ✨</p>
  
  <a href="https://animated-unicorn-db139d.netlify.app/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-FF6B6B?style=for-the-badge&logo=netlify&logoColor=white"/>
  </a>
  <a href="https://github.com/HamiParsa/Game-Hub">
    <img src="https://img.shields.io/badge/📁_Source_Code-24292e?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</div>

---

## 📖 About The Project

**Game-Hub** is a cutting-edge gaming discovery platform built with modern web technologies. It provides gamers with a comprehensive database of games, allowing them to explore, filter, and get detailed information about their favorite titles. The application features a sleek, responsive interface with smooth animations and real-time data fetching.

---

## ✨ Key Features

<div align="center">
  <table>
    <tr>
      <td align="center">🎯</td>
      <td><strong>Game Discovery</strong> - Browse thousands of games with infinite scroll</td>
    </tr>
    <tr>
      <td align="center">🔍</td>
      <td><strong>Advanced Filtering</strong> - Filter by genre, platform, rating, and release year</td>
    </tr>
    <tr>
      <td align="center">📊</td>
      <td><strong>Detailed Analytics</strong> - View ratings, reviews, and game statistics</td>
    </tr>
    <tr>
      <td align="center">🎨</td>
      <td><strong>Dark/Light Mode</strong> - Seamless theme switching with persistent preference</td>
    </tr>
    <tr>
      <td align="center">⚡</td>
      <td><strong>Real-time Data</strong> - Live updates from RAWG Video Games Database API</td>
    </tr>
    <tr>
      <td align="center">📱</td>
      <td><strong>Fully Responsive</strong> - Perfect experience on all devices</td>
    </tr>
  </table>
</div>

---

## 🛠️ Built With

<div align="center">
  
  | Frontend | State & Data | Styling | Animation | API |
  |----------|--------------|---------|-----------|-----|
  | ⚛️ React 18 | 🔄 Zustand | 🎨 Tailwind CSS | 🎭 Framer Motion | 🎮 RAWG API |
  | 📘 TypeScript | ⚡ React Query | 💅 CSS Modules | ✨ Custom Hooks | 🔌 Axios |
  | 🧭 React Router | 🎯 Context API | 📱 Mobile-first | 🎪 Transitions | 🌐 RESTful |

</div>

---

## 🎯 Core Functionalities

### 🎮 For Gamers
- **Browse Games**: Explore thousands of games with pagination
- **Smart Search**: Find games by title, genre, or platform
- **Game Details**: View screenshots, trailers, and system requirements
- **Rating System**: Check Metacritic and user ratings
- **Release Calendar**: See upcoming and recently released games

### 👨‍💻 For Developers
- **Modular Architecture**: Clean, maintainable code structure
- **Custom Hooks**: Reusable logic for data fetching and filtering
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Lazy loading and code splitting
- **SEO Friendly**: Dynamic meta tags and routing

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- RAWG API key ([Get one here](https://rawg.io/apidocs))

### Installation

```bash
# Clone the repository
git clone https://github.com/HamiParsa/Game-Hub.git

# Navigate to project directory
cd Game-Hub

# Install dependencies
npm install

# Create .env file and add your API key
echo "VITE_RAWG_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
