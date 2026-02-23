"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Newspaper, 
  Mail, 
  MapPin, 
  Calendar,
  Github,
  Twitter,
  Linkedin,
  Award,
  Clock,
  Heart,
  Star
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years Gaming", value: "15+", icon: Clock },
    { label: "Reviews Written", value: "200+", icon: Newspaper },
    { label: "Community Members", value: "50K+", icon: Users },
    { label: "Games Completed", value: "500+", icon: Trophy },
  ];

  const achievements = [
    {
      title: "Gaming Journalist of the Year",
      year: "2025",
      description: "Awarded for excellence in game reviews and industry analysis",
    },
    {
      title: "Top Gaming Content Creator",
      year: "2024",
      description: "Recognized for creating engaging and informative gaming content",
    },
    {
      title: "Community Choice Award",
      year: "2023",
      description: "Voted by readers as favorite gaming news source",
    },
  ];

  const favorites = [
    {
      category: "Favorite Games",
      items: ["The Witcher 3", "God of War", "Red Dead Redemption 2", "Elden Ring"],
    },
    {
      category: "Favorite Genres",
      items: ["RPG", "Action-Adventure", "Open World", "Story-Driven"],
    },
    {
      category: "Favorite Platforms",
      items: ["PC", "PS5", "Nintendo Switch", "Xbox Series X"],
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Started Gaming News",
      description: "Launched the website to share gaming news and reviews",
    },
    {
      year: "2022",
      title: "Reached 10K Readers",
      description: "Community grew to 10,000 monthly active readers",
    },
    {
      year: "2024",
      title: "Expanded Team",
      description: "Added new writers and reviewers to the team",
    },
    {
      year: "2026",
      title: "50K Strong",
      description: "Celebrating 50,000+ community members",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] " />
        
        <div className="absolute top-20 left-10 w-250 h-250 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-250 h-250 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
            <Heart size={16} className="text-red-500" />
            <span className="text-sm font-medium text-white/80">ABOUT ME</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">
              Hey, Im
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500">
              Alex Chen
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Passionate gamer, reviewer, and content creator. Sharing my gaming journey and helping others discover amazing games since 2020.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 sticky top-24">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50" />
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
                  alt="Alex Chen"
                  width={160}
                  height={160}
                  className="relative rounded-full border-4 border-white/20 object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2">Alex Chen</h2>
              <p className="text-white/60 text-center mb-6">Senior Gaming Editor</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={18} className="text-purple-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail size={18} className="text-purple-500" />
                  <span>alex@gaminghub.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Calendar size={18} className="text-purple-500" />
                  <span>Joined 2020</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mb-8">
                <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Twitter size={20} className="text-white/60" />
                </Link>
                <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Github size={20} className="text-white/60" />
                </Link>
                <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Linkedin size={20} className="text-white/60" />
                </Link>
              </div>

              <button className="w-full py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-600/30 transition-all">
                Contact Me
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Gamepad2 size={24} className="text-purple-500" />
                My Story
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Ive been passionate about video games since I got my first console at age 8. What started as a hobby 
                eventually turned into a career when I realized I could combine my love for gaming with my skills in writing.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today, I run GamingHub with a mission to provide honest, in-depth reviews and the latest gaming news. 
                I believe in the power of games to tell amazing stories, connect people, and create unforgettable experiences.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
                  <stat.icon size={24} className="mx-auto mb-3 text-purple-500" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock size={24} className="text-purple-500" />
                Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full" />
                      {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-purple-500/30" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="text-purple-500 font-mono text-sm mb-1">{item.year}</div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} className="text-purple-500" />
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="text-purple-500 font-mono text-sm mb-2">{achievement.year}</div>
                    <h4 className="font-bold mb-2">{achievement.title}</h4>
                    <p className="text-white/40 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorites */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star size={24} className="text-purple-500" />
                Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {favorites.map((fav) => (
                  <div key={fav.category}>
                    <h4 className="font-bold mb-3 text-purple-500">{fav.category}</h4>
                    <ul className="space-y-2">
                      {fav.items.map((item) => (
                        <li key={item} className="text-white/60 flex items-center gap-2">
                          <span className="w-1 h-1 bg-purple-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Gaming Setup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Gamepad2 size={24} className="text-purple-500" />
                My Setup
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { item: "RTX 4090", type: "GPU" },
                  { item: "i9-14900K", type: "CPU" },
                  { item: "32GB DDR5", type: "RAM" },
                  { item: "LG 4K 144Hz", type: "Monitor" },
                  { item: "PS5", type: "Console" },
                  { item: "Xbox Series X", type: "Console" },
                  { item: "Nintendo Switch", type: "Handheld" },
                  { item: "Steam Deck", type: "Handheld" },
                ].map((item) => (
                  <div key={item.item} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                    <div className="text-sm font-bold text-white">{item.item}</div>
                    <div className="text-xs text-white/40 mt-1">{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="bg-linear-to-r from-purple-600/20 via-transparent to-blue-600/20 rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-4xl font-black mb-4">Lets Connect</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Have a game to review? Want to collaborate? Or just want to chat about games? Reach out!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-600/30 transition-all"
            >
              Contact Me
            </Link>
            <Link
              href="/news"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Read Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}