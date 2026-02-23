"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import {
  Calendar,
  Clock,
  TrendingUp,
  Filter,
  Search,
  ChevronRight,
  X,
  SlidersHorizontal,
  Mail,
  Bell,
  Rocket,
  Sparkles,
  Zap,
  Gamepad2,
  Eye,
  MessageCircle,
  Bookmark,
  Share2,
  Crown,
} from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Xbox Unveils Massive 2026 Roadmap: Forza, Halo, Fable & Gears All Launching This Year",
    excerpt: "Microsoft confirms Forza Horizon 6 (May 19), Halo: Campaign Evolved (Summer), Fable and Gears of War: E-Day (Fall) as part of its biggest first-party lineup in years.",
    image: "https://wallpaperaccess.com/full/211180.jpg",
    date: "2026-02-07",
    displayDate: "Feb 7, 2026",
    readTime: "4 min read",
    category: "Xbox",
    trending: true,
    comments: 234,
    views: "45.2k",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
  },
  {
    id: 2,
    title: "Phil Spencer Retires: Asha Sharma Named New Xbox CEO, Promises 'Return of Xbox'",
    excerpt: "Microsoft Gaming appoints AI executive Asha Sharma as new CEO after Phil Spencer's retirement. Sharma commits to focus on console exclusives and 'no AI slop' in game development.",
    image: "https://wallpaperaccess.com/full/278989.png",
    date: "2026-02-22",
    displayDate: "Feb 22, 2026",
    readTime: "5 min read",
    category: "Xbox",
    trending: true,
    comments: 567,
    views: "89.3k",
    author: "Sarah Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108777-76679d73e84f?w=100",
  },
  {
    id: 3,
    title: "PS6 Delayed to 2028-2029 as Memory Shortage Hits Sony",
    excerpt: "Sony reportedly pushes next-gen console to 2028 or even 2029 due to AI-driven RAM shortages, while PS5 remains 'in the middle of its life cycle' with 92M units sold.",
    image: "https://wallpaperaccess.com/full/2310010.jpg",
    date: "2026-02-16",
    displayDate: "Feb 16, 2026",
    readTime: "3 min read",
    category: "PlayStation",
    trending: false,
    comments: 345,
    views: "67.8k",
    author: "Lisa Wang",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    id: 4,
    title: "AMD Confirms Next-Gen Xbox SoC Ready for 2027 Launch",
    excerpt: "AMD CEO Dr. Lisa Su confirms development of next-gen Xbox SoC is 'progressing well to support a 2027 launch,' featuring Zen 6 cores and RDNA 5 GPU with 70 compute units.",
    image: "https://wallpaperaccess.com/full/656442.jpg",
    date: "2026-02-04",
    displayDate: "Feb 4, 2026",
    readTime: "4 min read",
    category: "Xbox",
    trending: true,
    comments: 189,
    views: "34.2k",
    author: "Alex Chen",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
  },
  {
    id: 5,
    title: "Steam Machine Launching Early 2026: 6x More Powerful Than Steam Deck",
    excerpt: "Valve confirms Steam Machine with AMD Zen 4/RDNA 3 chip ships in early 2026, supporting 4K/60 FPS gaming with FSR, but memory shortages may impact pricing.",
    image: "https://wallpaperaccess.com/full/967362.png",
    date: "2026-02-03",
    displayDate: "Feb 3, 2026",
    readTime: "3 min read",
    category: "PC",
    trending: true,
    comments: 278,
    views: "41.5k",
    author: "Michael Brown",
    authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
  },
  {
    id: 6,
    title: "Nintendo Rules Out Virtual Console Revival, Focuses on Switch Online",
    excerpt: "Nintendo confirms it has 'no plans for Virtual Console types of offerings,' remaining focused on classic games through Switch Online + Expansion Pack despite Pokémon GBA eShop release.",
    image: "https://wallpaperaccess.com/full/704739.png",
    date: "2026-02-20",
    displayDate: "Feb 20, 2026",
    readTime: "3 min read",
    category: "Nintendo",
    trending: false,
    comments: 156,
    views: "22.7k",
    author: "Yuki Tanaka",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
  },
  {
    id: 7,
    title: "Microsoft Plans 'Next-Gen' Xbox Controller with Wi-Fi Direct for Cloud Gaming",
    excerpt: "New Xbox controller in development features direct Wi-Fi connectivity to reduce streaming latency, bypassing consoles and smart TVs for improved cloud gaming experience.",
    image: "https://wallpaperaccess.com/full/833268.png",
    date: "2026-02-05",
    displayDate: "Feb 5, 2026",
    readTime: "2 min read",
    category: "Xbox",
    trending: false,
    comments: 98,
    views: "18.3k",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
  },
  {
    id: 8,
    title: "Nintendo Considers Switch 2 Price Increase Amid Memory Shortage",
    excerpt: "Nintendo evaluating potential Switch 2 price hike in 2026 due to global memory supply pressures, may adjust bundles or remove pack-in titles like Mario Kart World.",
    image: "https://wallpaperaccess.com/full/704743.jpg",
    date: "2026-02-17",
    displayDate: "Feb 17, 2026",
    readTime: "2 min read",
    category: "Nintendo",
    trending: true,
    comments: 203,
    views: "36.9k",
    author: "Yuki Tanaka",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
  },
    {
    id: 9,
    title: "GTA 6 Confirmed for November 19, 2026 as Marketing Campaign Kicks Off This Summer",
    excerpt: "Take-Two Interactive reaffirms GTA 6 release date with 'high confidence', announces Rockstar's marketing campaign to begin Summer 2026. CEO Strauss Zelnick: 'I feel very good about it.'",
    image: "https://wallpapercave.com/wp/wp13258370.png",
    date: "2026-02-03",
    displayDate: "Feb 3, 2026",
    readTime: "4 min read",
    category: "Rockstar",
    trending: true,
    comments: 1243,
    views: "234.5k",
    author: "Michael Brown",
    authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
  },
  {
    id: 10,
    title: "GTA 6 Price Leak Suggests Record-Breaking $99.99 / Dh370 Price Tag",
    excerpt: "Digital store listings point to GTA 6 standard edition potentially costing £89.99 / $99.99, which would make it the most expensive AAA game in history. Rockstar has not officially confirmed pricing.",
    image: "https://wallpapercave.com/wp/wp13258374.jpg",
    date: "2026-02-22",
    displayDate: "Feb 22, 2026",
    readTime: "3 min read",
    category: "Rockstar",
    trending: true,
    comments: 2341,
    views: "178.9k",
    author: "Marcus Williams",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
  },
];

const categories = ["All", "Xbox", "PlayStation", "Nintendo", "Rockstar" , "PC"];
const sortOptions = ["Newest", "Oldest", "Most Popular", "Most Comments"];

const compareDates = (dateStr1: string, dateStr2: string) => {
  return new Date(dateStr1).getTime() - new Date(dateStr2).getTime();
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState("daily");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const filteredNews = useMemo(() => {
    let filtered = [...newsItems];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query),
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    switch (sortBy) {
      case "Newest":
        filtered.sort((a, b) => compareDates(b.date, a.date));
        break;
      case "Oldest":
        filtered.sort((a, b) => compareDates(a.date, b.date));
        break;
      case "Most Popular":
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case "Most Comments":
        filtered.sort((a, b) => b.comments - a.comments);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const displayedNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("Newest");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section with Cyberpunk Gradient */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] " />

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-200 h-200 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-200 h-200 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
            <Crown size={16} className="text-yellow-500" />
            <span className="text-sm font-medium text-white/80">
              PREMIUM GAMING NEWS
            </span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">
              Gaming
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-yellow-500">
              News Hub
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10">
            Your premier destination for the latest gaming news, exclusive
            interviews, and industry insights.
          </p>

          {/* Search Bar with Glass Effect */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative flex items-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
              <Search className="absolute left-4 text-white/40" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news, games, or topics..."
                className="w-full pl-12 pr-4 py-5 bg-transparent rounded-2xl text-white placeholder-white/40 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-white/40 hover:text-white/60"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery ||
            selectedCategory !== "All" ||
            sortBy !== "Newest") && (
            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
              <span className="text-sm text-white/40">Active filters:</span>
              {searchQuery && (
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 border border-white/10">
                  <Search size={12} />
                  {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-white"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedCategory !== "All" && (
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 border border-white/10">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="hover:text-white"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {sortBy !== "Newest" && (
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 border border-white/10">
                  Sort: {sortBy}
                  <button
                    onClick={() => setSortBy("Newest")}
                    className="hover:text-white"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 text-sm text-white/60 hover:text-white underline underline-offset-4"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sticky Filters Bar */}
      <section className=" bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
              <Filter size={18} className="text-white/40 flex" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                    ${
                      selectedCategory === category
                        ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-600/30"
                        : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                    }
                  `}
                >
                  {category}
                  {category !== "All" && (
                    <span
                      className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-white/10"
                      }`}
                    >
                      {
                        newsItems.filter((item) => item.category === category)
                          .length
                      }
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                <SlidersHorizontal size={18} className="text-white/60" />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="hidden md:block px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-white/80 focus:outline-none focus:ring-2 focus:ring-red-600/50 cursor-pointer hover:bg-white/10 transition-colors border border-white/10"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#1A1A1A]">
                    Sort by: {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Sort */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-[#1A1A1A] rounded-xl border border-white/10">
              <p className="text-sm font-medium text-white/60 mb-3">Sort by</p>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      sortBy === option
                        ? "bg-linear-to-r from-red-600 to-orange-600 text-white"
                        : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex items-center justify-between">
          <p className="text-white/60">
            Showing{" "}
            <span className="font-semibold text-white">
              {displayedNews.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white">
              {filteredNews.length}
            </span>{" "}
            articles
          </p>
          <p className="text-sm text-white/40 flex items-center gap-2">
            <Clock size={14} />
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Featured News */}
      {!searchQuery &&
        selectedCategory === "All" &&
        sortBy === "Newest" &&
        filteredNews[0]?.trending && (
          <section className="max-w-7xl mx-auto px-5 pb-12">
            <Link
              href={`/news/${filteredNews[0].id}`}
              className="group block relative"
            >
              <div className="relative h-100 rounded-3xl overflow-hidden">
                <Image
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-red-600/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-full text-sm font-bold flex items-center gap-2">
                      <Crown size={16} />
                      FEATURED STORY
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                      {filteredNews[0].category}
                    </span>
                  </div>

                  <h2 className="text-5xl font-bold mb-4 max-w-3xl">
                    {filteredNews[0].title}
                  </h2>

                  <p className="text-white/60 mb-6 max-w-2xl text-lg">
                    {filteredNews[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-white/40">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {filteredNews[0].displayDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {filteredNews[0].readTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye size={16} />
                      {filteredNews[0].views} views
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      {filteredNews[0].comments} comments
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        {displayedNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 hover:border-red-600/50 h-full backdrop-blur-sm">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-linear-to-r from-red-600 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                          {item.category}
                        </span>
                      </div>

                      {/* Trending Badge */}
                      {item.trending && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                            <TrendingUp size={12} />
                            Trending
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-white/40 text-sm mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-white/30 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.displayDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {item.views}
                        </span>
                      </div>

                      {/* Author & Actions */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={item.authorAvatar}
                                alt={item.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-white/60">
                              {item.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 text-white/30 hover:text-white/60 transition-colors">
                              <Bookmark size={14} />
                            </button>
                            <button className="p-1.5 text-white/30 hover:text-white/60 transition-colors">
                              <Share2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-red-600 to-orange-600 group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="group relative px-10 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-600/30 transition-all hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Load More Articles
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </div>
            )}
          </>
        ) : (
          // No Results
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 rounded-full mb-6 border border-white/10">
              <Search size={40} className="text-white/20" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              No articles found
            </h3>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              We couldnt find any articles matching your search criteria. Try
              adjusting your filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-8 py-3 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-red-600/20 via-transparent to-orange-600/20 py-20 border-t border-white/10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 " />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Gamepad2 className="absolute top-20 left-20 text-white/5 w-32 h-32 animate-float" />
          <Zap className="absolute bottom-20 right-20 text-white/5 w-24 h-24 animate-float delay-200" />
          <Rocket className="absolute top-40 right-40 text-white/5 w-28 h-28 animate-float delay-500" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <Bell size={16} className="text-red-500" />
            <span className="text-sm font-medium text-white/80">
              BE THE FIRST TO KNOW
            </span>
            <Sparkles size={16} className="text-yellow-500" />
          </div>

          {/* Title */}
          <h2 className="text-5xl font-black text-white mb-4">
            Never Miss an
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
              Update
            </span>
          </h2>

          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10">
            Join <span className="font-bold text-white">50,000+</span> gamers
            who get exclusive news, early updates, and insider content straight
            to their inbox.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: <Rocket />,
                text: "Early Access",
                desc: "Get news first",
              },
              { icon: <Zap />, text: "Exclusive", desc: "Insider content" },
              { icon: <Gamepad2 />, text: "Giveaways", desc: "Win prizes" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{benefit.text}</div>
                    <div className="text-xs text-white/40">{benefit.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="flex justify-center gap-3 mb-8">
              {[
                { type: "daily", label: "Daily", icon: <Zap size={14} /> },
                {
                  type: "weekly",
                  label: "Weekly",
                  icon: <Calendar size={14} />,
                },
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => setSubscriptionType(option.type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      subscriptionType === option.type
                        ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-lg"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                    size={18}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-600/50 focus:ring-4 focus:ring-red-600/20"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-red-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Bell size={18} />
                  Subscribe
                </button>
              </div>
            </form>

            {isSubscribed && (
              <div className="mt-4 text-center text-green-400 font-medium animate-pulse">
                ✓ Thanks for subscribing! Check your email.
              </div>
            )}

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/30">
              <span>No spam</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Unsubscribe anytime</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Free</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8 text-white/40 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50k+</div>
              <div>Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9</div>
              <div>★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div>Open Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 2s;
        }
        .delay-500 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
